const {
    deidentifyText
} = require("./deidentify");


async function test() {

    const text = `
        My name is Rahul Sharma.
        My phone number is 9876543210.
        My email is rahul@gmail.com.
    `;


    const result =
        await deidentifyText(text);


    console.log("Original:");
    console.log(text);

    console.log("\nDe-identified:");
    console.log(result);

}


test();