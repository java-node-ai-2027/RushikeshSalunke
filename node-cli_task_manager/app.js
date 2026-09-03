const fs = require("fs");
const path = require("path");

const TASKS_FILE = path.join(__dirname, "tasks.json");
const command = process.argv[2];
const input = process.argv[3];

// Read existing tasks from storage
let tasks = [];
if (fs.existsSync(TASKS_FILE)) {
    try {
        const fileData = fs.readFileSync(TASKS_FILE, "utf8");
        tasks = JSON.parse(fileData);
    } catch (error) {
        console.error("Error reading tasks.json. Initializing empty task list.");
        tasks = [];
    }
}

// Helper to save tasks to JSON
function saveTasks(tasksList) {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasksList, null, 2), "utf8");
}

// Command Handler
switch (command) {
    case "add": {
        if (!input) {
            console.log("Error: Please provide a task description.");
            console.log('Usage: node app.js add "Task title"');
            process.exit(1);
        }

        const newTask = {
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
            title: input,
            completed: false
        };

        tasks.push(newTask);
        saveTasks(tasks);
        console.log(`Task added successfully! (ID: ${newTask.id})`);
        break;
    }

    case "list": {
        if (tasks.length === 0) {
            console.log("No tasks found.");
        } else {
            console.log("\n--- Task List ---");
            tasks.forEach(task => {
                const status = task.completed ? "[x]" : "[ ]";
                console.log(`${task.id}. ${status} ${task.title}`);
            });
            console.log("-----------------\n");
        }
        break;
    }

    case "delete": {
        const taskId = Number(input);

        if (!taskId || isNaN(taskId)) {
            console.log("Error: Please provide a valid task ID number to delete.");
            console.log("Usage: node app.js delete <task_id>");
            process.exit(1);
        }

        const initialLength = tasks.length;
        tasks = tasks.filter(task => task.id !== taskId);

        if (tasks.length === initialLength) {
            console.log(`Task with ID ${taskId} not found.`);
        } else {
            saveTasks(tasks);
            console.log(`Task ${taskId} deleted successfully!`);
        }
        break;
    }

    default: {
        console.log("Usage Guide:");
        console.log('  node app.js add "Task title"   - Add a new task');
        console.log("  node app.js list               - List all tasks");
        console.log("  node app.js delete <task_id>   - Delete a task by ID");
        break;
    }
}