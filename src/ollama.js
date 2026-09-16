async function cleanTextWithOllama(text) {

    const response = await fetch(
        "http://localhost:11434/api/chat",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            signal: AbortSignal.timeout(300_000),

            body: JSON.stringify({

                model: "qwen3:4b",

                messages: [

                    {
                        role: "system",

                        content: `
Clean the OCR text and return a JSON object.

Rules:
- Fix spelling mistakes caused by OCR.
- Remove unnecessary OCR noise.
- Do not invent information.
- Keep de-identified placeholders such as <PERSON> and <EMAIL_ADDRESS>.
- Return exactly this JSON shape: {"cleanedText":"..."}
- Do not include explanations, reasoning, markdown, or the original text outside the JSON.
`
                    },

                    {
                        role: "user",
                        content: text
                    }

                ],

                stream: false,
                think: false,
                format: {
                    type: "object",
                    properties: {
                        cleanedText: {
                            type: "string"
                        }
                    },
                    required: ["cleanedText"]
                },
                options: {
                    num_predict: 500
                }
            })
        }
    );
    

    if (!response.ok) {

        throw new Error(
            `Ollama request failed with HTTP ${response.status}`
        );

    }

    const data = await response.json();

    if (!data.message || typeof data.message.content !== "string") {
        throw new Error("Ollama returned an invalid response");
    }

    let result;

    try {
        result = JSON.parse(data.message.content);
    } catch (error) {
        throw new Error("Ollama returned invalid cleaned-text JSON");
    }

    if (typeof result.cleanedText !== "string") {
        throw new Error("Ollama response did not contain cleanedText");
    }

    return result.cleanedText;
}

module.exports = {
    cleanTextWithOllama
};



// async function cleanTextWithOllama(text) {
//     const response = await fetch("http://localhost:11434/api/chat",{
//         method: "POST",
//         headers:{
//             "Content-type":"application/json"
//         },

//         body:JSON.stringify({
//             model:"qwen3:4b",
//             messages:[
//                 {
//                 role: "system",
//                 content: `
//                 Your clean OCR text 

//                 Rules are :
//                 - fix speeling mistake caused by OCR 
//                 - remove unnecceary noise 
//                 - do not invent information 
//                 - keep de-identified placeholder such as <person> and <email_address>.
//                 - return only valid json  `

//                 },
//                 {
//                     role: "user",
//                     content:text

//                 }
//             ],stream: false
//         })
//     });

// if(!response.ok){
//     throw new Error("ollama request is get failed here");
// }
// const data =  await response.json();
// return data.message.content;

    
// }
// module.exports={ cleanTextWithOllama};