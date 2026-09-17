async function processDocuments(file) {
    try {
        //validata file 
     if(!file){
        throw new Error("file is  missing ");
     }

     const allowType = ["jpg","png","jpeg","pdf"];

     if(!allowType.includes(file.type)){
        throw new Error("unsupported doc file");
     }

     const response = fakeTextractAPI(file);
     console.log("textract succesfully");
     return response ;
    } catch (error) {
        if(error.message === "FILE_MISSING"){
            console.log("error : non file is available ");
        }else if( error.message === "UNSUPORTED_FILE"){
             console.log("error : non file TYNE  not supported  ");
        }else if(error.message === "ACCESS_DENIED"){
             console.log("aws permission denied ");
        }else if(error.message === "RATE_LIMIT"){
             console.log("to many request at server");
        }else{
            console.log("unknown textract error ",error.message);
        }
    }
}

async function fakeTextractAPI(file) {
    if(file.name === "permission.jpg"){
        throw new Error("ACCESS_DENIED")
    }
    if(file.name === "limit.jpg"){
        throw new Error("RATE_LIMIT");
    }
    return{
        Blocks: [
            { BlockType :"LINE", Text :"hello from textract" };
        ]
    };
}


processDocuments({name:"document.jpg", type:"jpg"}); // textract succesfully
processDocuments({name:"permission.jpg", type:"jpg"});
processDocuments({name:"limit.jpg", type:"jpg"});

