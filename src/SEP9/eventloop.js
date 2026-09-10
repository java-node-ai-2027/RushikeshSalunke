console.log("1");


setTimeout(() => {
    console.log("2");
}, 2000);
console.log("3");


//----------------------------------------  check the another 


console.log("a");
setTimeout(() => {
    console.log("b");
}, 0);
console.log("c");
