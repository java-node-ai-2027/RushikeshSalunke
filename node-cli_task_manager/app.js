// const fs = require("fs");
// const data = fs.readFileSync("tasks.json", "utf-8");
// console.log(data);

// let fs2 =require("fs");
// let data2 =fs2.writeFileSync("tasks.json", JSON.stringify([]))
// console.log(data2);




//-------------------------------------------------------------------------
// console.log("Task manager cli small proj and above is the fs");
// console.log(process.argv);

// console.log("Commanda are :", process.argv[3]);
// console.log("Task are:", process.argv[4]);//undefined bcoz not available 

// const res = process.argv[3];
// console.log(res);
// console.log('-----------------the process arg are  below --------------');
// console.log(process.argv[0]);
// console.log(process.argv[1]);
// console.log(process.argv[2]);
// console.log(process.argv[3]);
// console.log(process.argv[4]);

// //----------------------------------------
// const fs = require("fs");
// const command = process.argv[2];
// const input = process.argv[3];

// // let fs = require("fs");
// // let res =process.argv[2];
// // let ip=process.argv[3];

// let tasks = 
// [
//     {
//         "id": 1,
//         "title": "Learn Node.js",
//         "completed": false
//     },
//     {
//         "id": 2,
//         "title": "Learn JavaScript",
//         "completed": false
//     }
// ];

// // Read tasks from file
// if (fs.existsSync("tasks.json")) {
//     tasks = JSON.parse(fs.readFileSync("tasks.json", "utf8"));
// }
// // if(fs.existsSync("tasks.json")){
// //     tasks = JSON.parse(fs.readFileSync("tasks.json"));
// // }

// // ADD TASK
// if (command === "add") {
//     if (!input) {
//         console.log("Please enter a task.");
//         process.exit();
//     }
//     tasks.push(input);
//     fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
//     console.log("Task added!");
// }


///////---------------------------------------------

const fs = require("fs");
const command = process.argv[2];
const input = process.argv[3];

// Read tasks from tasks.json
let tasks = [];

if (fs.existsSync("tasks.json")) {
    tasks = JSON.parse(
        fs.readFileSync("tasks.json", "utf8")
    );
}

// ADD
if (command === "add") {

    if (!input) {
        console.log("Please enter a task.");
        process.exit();
    }

    tasks.push({
        id: tasks.length + 1,
        title: input,
        completed: false
    });

    fs.writeFileSync(
        "tasks.json",
        JSON.stringify(tasks, null, 2)
    );

    console.log("Task added!");
}

// LIST
else if (command === "list") {

    if (tasks.length === 0) {
        console.log("No tasks found.");
    } else {

        tasks.forEach(task => {
            console.log(`${task.id}. ${task.title}`);
        });

    }
}

// DELETE
else if (command === "delete") {

    const number = Number(input);

    if (!number || number > tasks.length) {
        console.log("Invalid task number.");
        process.exit();
    }

    tasks.splice(number - 1, 1);

    fs.writeFileSync(
        "tasks.json",
        JSON.stringify(tasks, null, 2)
    );

    console.log("Task deleted!");
}

// NO COMMAND
else {

    console.log("Available commands:");
    console.log('node app.js add "task"');
    console.log("node app.js list");
    console.log("node app.js delete 1");

}
