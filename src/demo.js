console.log("hello node.js nd welcome to 2026  ");


async function getUser(){
    try {
        const url = process.env.API_URL;
        console.log(url);
        
       //  const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        if(!response.status){
            throw new Error(`HTTP Error is  :${response.status}`);
        }

        const users = await response.json();
        console.log("user is received bro");
        users.forEach(user => {
            console.log(user.id,user.name);
        });
    } catch (error) {
        console.log("failed to fetch user ");
    }
}

getUser();








