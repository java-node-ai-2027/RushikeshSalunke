


async function deidentifyText(text) {

    // Step 1: Ask Presidio Analyzer to find PII
    const analyzeResponse = await fetch(
        "http://localhost:5002/analyze",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                text: text,
                language: "en"
            })
        }
    );

    if (!analyzeResponse.ok) {
        throw new Error(
            "Presidio Analyzer failed"
        );
    }

    const analyzerResults =
        await analyzeResponse.json();


    // Step 2: Send detected PII to Anonymizer
    const anonymizeResponse = await fetch(
        "http://localhost:5001/anonymize",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                text: text,

                analyzer_results:
                    analyzerResults,

                anonymizers: {

                    DEFAULT: {
                        type: "replace"
                    }

                }

            })
        }
    );


    if (!anonymizeResponse.ok) {
        throw new Error(
            "Presidio Anonymizer failed"
        );
    }


    const anonymizedData =
        await anonymizeResponse.json();


    return anonymizedData.text;
}


module.exports = {
    deidentifyText
};