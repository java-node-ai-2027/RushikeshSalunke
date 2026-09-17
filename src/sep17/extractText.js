const textractResponse = {
    Blocks: [
        { BlockType:"LINE" , Text :"John deo"},
        { BlockType:"WORD" , Text :"John"},
        { BlockType:"WORD" , Text :"Doe"},
        { BlockType:"LINE" , Text :"Email: john@example.com"},
        { BlockType:"LINE" , Text : "Phone: 91373827387"}
    ]
};

function extractPlainText(response){
    if(!response || !response.Blocks){
        return "";
    }
 
    const lines =response.Blocks
    .filter(block=> block.BlockType === "LINE")
    .map(block => block.Text);
    
    return lines.join("\n");
}

const text = extractPlainText(textractResponse);
console.log("extracted text");
console.log(text);

//---------------------------------------------



console.log("----------------------------------------");

const tesseractResponse = {
    Blocks: 
    [
    { BlockType: "LINE", Text: "Patient Name: Rahul" },
    { BlockType: "LINE", Text: "Age: 25" },
    { BlockType: "WORD", Text: "Age:" },
    { BlockType: "LINE", Text: "City: Pune" }
  ]
} ;

const tesseractplain = extractPlainText(tesseractResponse);
console.log(tesseractplain);
console.log("extracted by tesseract");

