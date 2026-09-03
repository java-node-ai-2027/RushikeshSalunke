console.log('-------------Js------------')

// Date

let date = new Date();
console.log(date.toString());
console.log("UTC Month:", date.getUTCMonth());
console.log(date.getFullYear());


// Object

let u1 = {
    name: 'a',
    age: 22,
    sal: 2500,
    isMarried: false
};

console.log(u1);
console.log("=============");

delete u1.name;

console.log(u1);


// Array of Objects

const stud = [
    {
        name: 'A',
        age: 25,
        pkg: "25lpa"
    },
    {
        name: 'B',
        age: 29,
        pkg: "20lpa"
    }
];

console.log(stud[1]);
console.log(stud.map(a => a.pkg));
console.log(stud.map(s => s.name));

console.log("--");


// Map

const students = new Map();

students.set("Rushi", 9975950);
students.set("Rahul", 25552);
students.set("Rushi", 876512);

console.log(students);


// Optional chaining

let obj = {
    name: 'A',
    address: {
        city: "jalg",
        pin: 23
    },
    age: 22
};

console.log(obj.address?.city);


// JSON

let u2 = {
    name: 'a',
    age: 22,
    sal: 2500,
    isMarried: false
};

console.log(u2);
console.log("=============");
console.log(JSON.stringify(u2));


// ================= Operation =================

const arr = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90];

const total = arr.reduce((sum, current) => {
    return sum += current;
}, 0);

console.log(total + " total ");

const avg = total / arr.length;

console.log(avg + ' is avg');

let high = arr.reduce((max, current) => {
    return max > current ? max : current;
}, arr[0]);

console.log(high);

const passed = arr.reduce((count, current) => {
    if (current >= 50) {
        count++;
    }
    return count;
}, 0);

console.log(passed + " passed");


// ================= MAP =================

const emp = new Map();

emp.set(1, "ram");
emp.set(2, "sham");
emp.set(3, 'prit');
emp.set(3, 'sruti');
emp.set(4, 'kirti');

console.log(emp.get(1));
console.log(emp.has(5));
console.log(emp.size);
console.log(emp);

for (const [a, n] of emp) {
    console.log(a, n);
}

for (let [x, y] of emp) {
    console.log(y);
}


// Set

const num = [10,20,30,4,50,60,70,80,90];

let uninum = new Set(num);

console.log(uninum);

let res = [...uninum];

console.log(res);

uninum.add(100);

console.log(uninum);

console.log(uninum.has(20));

uninum.delete(30);

console.log(uninum);


// Optional chaining

let objj = {
    name: "ankita",
    age: 24,
    add: {
        city: "pune",
        post: "thergaon"
    },
    native: 'jalgaon'
};

console.log(objj.name);
console.log(objj.add?.city);


// Nullish coalescing

let uname1 = 'priti';
let uname2 = null;

let finalName = uname2 ?? "ramayan";

console.log(finalName);

let age;

let uage = age ?? 25;

console.log(uage);


// && and ||

let isok = true;

isok && console.log("welcome to Fun Zone");

const isOk = false;

isOk || console.log("welcome to pain zone");


// Object reference

let obj1 = {
    name: "Kalyani",
    age: 24
};

let obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj2.name = "prit";

console.log(obj2);
console.log(obj1);


// Shallow copy

let obj9 = {
    name: "Kalyani",
    age: 24
};

let obj9Copy = {
    ...obj9
};

console.log(obj9);
console.log(obj9Copy);

obj9Copy.name = "prit";

console.log(obj9Copy);
console.log(obj9);


// Nested object

let obj8 = {
    name: "ankita",
    age: 24,
    add: {
        city: "pune",
        post: "thergaon"
    },
    native: 'jalgaon'
};

let obj8Copy = {
    ...obj8
};

console.log(obj8);
console.log(obj8Copy);

obj8Copy.add.city = "KOKAN";

console.log(obj8);
console.log(obj8Copy);


// Deep copy

let obj3 = structuredClone(obj8);

obj3.add.city = "Kolhapur";

console.log(obj8);
console.log(obj3);


// Object keys values entries

let o1 = {
    name: "ankita",
    age: 24,
    add: {
        city: "pune",
        post: "thergaon"
    },
    native: 'jalgaon'
};

let k = Object.keys(o1);

console.log(k);

let v = Object.values(o1);

console.log(v);

let ent = Object.entries(o1);

console.log(ent);


// Map and filter

let arr3 = [1,2,3,4,5,6,7,8,9];

console.log(arr3);

let arr1 = arr3.map((a) => a * 2);

console.log(arr1);

let arr2 = arr1.filter((val) => val % 2 === 0);

console.log(arr2);


// Date comparison

let joindate = new Date("2026-08-29");
let today = new Date();

if (joindate < today) {
    console.log("already joined");
} else {
    console.log("not joined yet");
}


// Filter and map

let empp = [
    { name: "ankita", age: 23, native: "dhule" },
    { name: "rmama", age: 23, native: "jalgao" },
    { name: "shruti", age: 23, native: "jalgao" }
];

const ress = empp
    .filter(({ native }) => native === "jalgao")
    .map(({ name }) => name);

console.log(ress);


// Reduce

const numbers = [10,20,30,40,50];

let add = numbers.reduce((sum, number) => sum += number, 0);

console.log(add);

let large = numbers.reduce((a, b) => {
    return a > b ? a : b;
});

console.log(large);

let counter = numbers.reduce((val, num) => {
    if (num >= 50) {
        val++;
    }
    return val;
}, 0);

console.log(counter);

const passed2 = numbers.reduce((count, item) => {
    if (item >= 50) {
        count++;
    }
    return count;
}, 0);

console.log(passed2 + " passed");


// Set

let set = new Set();

set.add(1);
set.add(2);
set.add(1);
set.add(3);
set.add(2);
set.add(3);
set.add(2);
set.add(6);
set.add(9);

console.log(set);


// Regex

const pattern = /hello/;

console.log(pattern.test("hello world"));
console.log(pattern.test("Hello world"));


// Map

let employees = [
    { name: "a", salary: 25000 },
    { name: "a", salary: 25000 },
    { name: "a", salary: 25000 }
];

const employeeFormattedList = employees.map(({ name, salary }) => {
    return `${name}: ${salary}`;
});

console.log(employeeFormattedList);


// map       → CHANGE
// filter    → SELECT
// reduce    → COMBINE

// Map       → KEY → VALUE
// Set       → UNIQUE

// ?.        → SAFE ACCESS
// ??        → NULL/UNDEFINED BACKUP

// &&        → IF TRUE, CONTINUE
// ||        → IF FALSE, BACKUP

// Primitive → VALUE
// Object    → REFERENCE

// Shallow   → COPY OUTER LAYER
// Deep      → COPY EVERYTHING

// ...       → CREATE COPY / SPREAD

// keys      → KEYS
// values    → VALUES
// entries   → BOTH

// Date      → DATE & TIME
// Regex     → TEXT PATTERN


// Employees

const employees_2 = [
    {
        id: 101,
        name: "Rahul",
        department: "IT",
        salary: 50000,
        skills: ["JS", "Node"],
        active: true
    },
    {
        id: 102,
        name: "Amit",
        department: "HR",
        salary: 40000,
        skills: ["Recruitment"],
        active: false
    },
    {
        id: 103,
        name: "Priya",
        department: "IT",
        salary: 60000,
        skills: ["JS", "React"],
        active: true
    }
];

console.log(employees_2);


// DOM

let headingElement = Document.querySelector("h1");

if (headingElement) {
    headingElement.innerHTML = "jay maharashtra";
    headingElement.innerHTML = "hello";
    headingElement.style.color = "pink";
    headingElement.style.backgroundColor = "black";

    headingElement.addEventListener("click", function () {
        console.log("welcome event listener");

        headingElement.style.color = "yellow";
        headingElement.style.backgroundColor = "black";

        headingElement.innerHTML =
            "Ramdwarar jagat Jalgaon and having a Millions of Devotees";
    });
}


// Bulb

let toggleFlag = 0;

let bulb = document.querySelector("#id1");
let lightButton = document.querySelector("button");

if (lightButton && bulb) {
    lightButton.addEventListener("click", function () {
        if (toggleFlag === 0) {
            bulb.style.backgroundColor = "yellow";

            console.log("light lagla");

            toggleFlag = 1;
        } else {
            bulb.style.backgroundColor = "black";

            console.log("light OFF");

            toggleFlag = 0;
        }
    });
}


// Loop

let arr_2 = [1,2,3,4,5,6,7,8,9,10];

let loopSum = 0;

for (let item of arr_2) {
    loopSum += item;
}

console.log("Loop Sum:", loopSum);

let reduceSum = arr_2.reduce((acc, curr) => acc + curr, 0);

console.log("Reduce Sum:", reduceSum);


// Reduce into object

const users = [
    { name: "A", age: 20 },
    { name: "B", age: 25 },
    { name: "C", age: 30 }
];

const resultObj_1 = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
}, {});

console.log(resultObj_1);

const resultObj_2 = users.reduce((a, b) => {
    a[b.name] = b.age;
    return a;
}, {});

console.log(resultObj_2);


// Map

const uu1 = new Map();

uu1.set("uu1", "rushi");
uu1.set("uu2", "priti");
uu1.set("uu3", "shruti");

console.log(uu1.get("uu1"));
console.log(uu1.get("uu2"));

for (let [id, name] of uu1) {
    console.log(`${id}: ${name}`);
}


// DOM title

const title = document.querySelector("#title");

console.log(title);

if (title) {
    title.textContent = "Welcome";
}


// Students

let studentts = [
    { id: 1, name: "A", marks: 80 },
    { id: 2, name: "B", marks: 90 },
    { id: 3, name: "C", marks: 70 }
];

console.log(studentts.filter((s) => s.marks < 80));

console.log(studentts);

console.log(Object.keys(studentts));
console.log(Object.values(studentts));
console.log(Object.entries(studentts));


// Try catch finally

function riskyOperation() {
    console.log("Johnson Line LAC");
}

try {
    let result = riskyOperation();
} catch (error) {
    console.log("Something went wrong");
} finally {
    console.log("Always runs this block");
}


// setTimeout

console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");

console.log("1");

setTimeout(() => {
    console.log("2");
}, 3000);

console.log("3");


// Promise

let ourpromise = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve("data got 100%");
    } else {
        reject("not received");
    }
});

ourpromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


// Class

class Studd {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    welcome() {
        console.log(
            `Hello welcome ${this.name} now u become ${this.age} year old`
        );
    }
}

let s1 = new Studd("priti", 24);

s1.welcome();


// Inheritance

class Animal {
    walk() {
        console.log("animal is running");
    }
}

class Dog extends Animal {
    bark() {
        console.log("dog may bite");
    }
}

let dogObj = new Dog();

dogObj.walk();
dogObj.bark();


// Method overriding

class Animal_2 {
    bark() {
        console.log("animal is running");
    }
}

class Dog_2 extends Animal_2 {
    bark() {
        console.log("dog may bite");
    }
}

let dogObj2 = new Dog_2();

dogObj2.bark();


// Query selector all

const textItems = document.querySelectorAll(".text");

textItems.forEach((item) => {
    item.addEventListener("click", function () {
        this.style.color = "crimson";
    });
});


// Button

const actionBtn = document.querySelector("#myBtn");

if (actionBtn) {
    actionBtn.addEventListener("click", () => {
        console.log("Button was clicked!");
    });
}


// Final

let usernameVar = "JohnDoe";

console.log(usernameVar);
















//---output is 
/*

-------------Js------------
Thu Sep 03 2026 15:05:47 GMT+0530 (India Standard Time)
UTC Month: 8
2026
{ name: 'a', age: 22, sal: 2500, isMarried: false }
=============
{ age: 22, sal: 2500, isMarried: false }
{ name: 'B', age: 29, pkg: '20lpa' }
[ '25lpa', '20lpa' ]
[ 'A', 'B' ]
--
Map(2) { 'Rushi' => 876512, 'Rahul' => 25552 }
jalg
{ name: 'a', age: 22, sal: 2500, isMarried: false }
=============
{"name":"a","age":22,"sal":2500,"isMarried":false}
495 total 
27.5 is avg
90
5 passed
ram
false
4
Map(4) { 1 => 'ram', 2 => 'sham', 3 => 'sruti', 4 => 'kirti' }
1 ram
2 sham
3 sruti
4 kirti
ram
sham
sruti
kirti
Set(9) { 10, 20, 30, 4, 50, 60, 70, 80, 90 }
[
  10, 20, 30,  4, 50,
  60, 70, 80, 90
]
Set(10) { 10, 20, 30, 4, 50, 60, 70, 80, 90, 100 }
true
Set(9) { 10, 20, 4, 50, 60, 70, 80, 90, 100 }
ankita
pune
ramayan
25
welcome to Fun Zone
welcome to pain zone
{ name: 'Kalyani', age: 24 }
{ name: 'Kalyani', age: 24 }
{ name: 'prit', age: 24 }
{ name: 'prit', age: 24 }
{ name: 'Kalyani', age: 24 }
{ name: 'Kalyani', age: 24 }
{ name: 'prit', age: 24 }
{ name: 'Kalyani', age: 24 }
{
  name: 'ankita',
  age: 24,
  add: { city: 'pune', post: 'thergaon' },
  native: 'jalgaon'
}
{
  name: 'ankita',
  age: 24,
  add: { city: 'pune', post: 'thergaon' },
  native: 'jalgaon'
}
{
  name: 'ankita',
  age: 24,
  add: { city: 'KOKAN', post: 'thergaon' },
  native: 'jalgaon'
}
{
  name: 'ankita',
  age: 24,
  add: { city: 'KOKAN', post: 'thergaon' },
  native: 'jalgaon'
}
{
  name: 'ankita',
  age: 24,
  add: { city: 'KOKAN', post: 'thergaon' },
  native: 'jalgaon'
}
{
  name: 'ankita',
  age: 24,
  add: { city: 'Kolhapur', post: 'thergaon' },
  native: 'jalgaon'
}
[ 'name', 'age', 'add', 'native' ]
[ 'ankita', 24, { city: 'pune', post: 'thergaon' }, 'jalgaon' ]
[
  [ 'name', 'ankita' ],
  [ 'age', 24 ],
  [ 'add', { city: 'pune', post: 'thergaon' } ],
  [ 'native', 'jalgaon' ]
]
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
[
   2,  4,  6,  8, 10,
  12, 14, 16, 18
]
[
   2,  4,  6,  8, 10,
  12, 14, 16, 18
]
already joined
[ 'rmama', 'shruti' ]
150
50
1
1 passed
Set(5) { 1, 2, 3, 6, 9 }
true
false
[ 'a: 25000', 'a: 25000', 'a: 25000' ]
[
  {
    id: 101,
    name: 'Rahul',
    department: 'IT',
    salary: 50000,
    skills: [ 'JS', 'Node' ],
    active: true
  },
  {
    id: 102,
    name: 'Amit',
    department: 'HR',
    salary: 40000,
    skills: [ 'Recruitment' ],
    active: false
  },
  {
    id: 103,
    name: 'Priya',
    department: 'IT',
    salary: 60000,
    skills: [ 'JS', 'React' ],
    active: true
  }
]*/














































//--------------AI base study format just for Understanding -----------------------------------------------
/**
 * ==========================================
 * TOPIC: READING & UNDERSTANDING EXISTING JS CODE
 * ==========================================
 * 1. PURPOSE   -> Manage employee records & simulate asynchronous API load.
 * 2. STRUCTURE -> Data Store -> Data Processing -> Async API Simulation -> DOM / Execution Flow
 * 3. DATA      -> Array of Employee Objects (id, name, role, salary, active)
 * 4. FLOW      -> Fetch Data -> Filter High Earners -> Transform -> Display Result
 * 5. DETAILS   -> Look for array methods (filter, map), async/await, and debugging breakpoints.
 */
// ==========================================
// 1. DATA STORE (Initial State)
// ==========================================
// const rawEmployeeData = [
//   { id: 101, name: "Rushi", role: "Developer", salary: 75000, active: true },
//   { id: 102, name: "Amit", role: "Designer", salary: 48000, active: true },
//   { id: 103, name: "Rahul", role: "QA Engineer", salary: 42000, active: false },
//   { id: 104, name: "Priya", role: "Tech Lead", salary: 95000, active: true },
//   { id: 105, name: "Neha", role: "DevOps", salary: 68000, active: true }
// ];
// ==========================================
// 2. DATA PROCESSING FUNCTIONS (Pure Functions)
// =========================================
/**
 * Filter employees earning above a threshold.
 * INPUT: employees (Array), threshold (Number) -> OUTPUT: Filtered Array
 */
// function getHighSalaryEmployees(employees, threshold = 50000) {
  // Input validation check
//   if (!Array.isArray(employees)) return [];
//   return employees.filter(emp => emp.active && emp.salary > threshold);
// }
// /**
//  * Transform employee objects into display-friendly summary strings.
//  * INPUT: employees (Array) -> OUTPUT: Array of Strings
//  */
// function formatEmployeeSummaries(employees) {
//   return employees.map(emp => `${emp.name} (${emp.role}) - $${emp.salary}`);
// }
// /**
//  * Find a specific employee by ID.
//  * INPUT: employees (Array), id (Number) -> OUTPUT: Object | undefined
//  */
// function findEmployeeById(employees, id) {
//   return employees.find(emp => emp.id === id);
// }
// // ==========================================
// // 3. ASYNCHRONOUS SIMULATION (API Layer)
// / ==========================================
// /**
//  * Simulates fetching employee data from a backend server via Async/Await.
//  * INPUT: None -> OUTPUT: Promise <Array>
//  */
// async function fetchRemoteEmployees() {
//   console.log("⏳ Fetching employee records from network...");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isSuccess = true; // Toggle to false to test catch block
//       if (isSuccess) {
//         resolve(rawEmployeeData);
//       } else {
//         reject(new Error("Failed to fetch data from API."));
//       }
//     }, 1000);
//   });
// }
// // ==========================================
// // 4. MAIN CONTROLLER & EXECUTION FLOW
// // ==========================================
// async function runApplication() {
//   console.log("🚀 Application Starting...");
//   try {
//     // STEP A: Fetch Data (Async Flow)
//     const employees = await fetchRemoteEmployees();
//     console.log(`✅ Loaded ${employees.length} records.`);
//     // STEP B: Un-comment 'debugger;' to inpect variable states in DevTools!
//     // debugger;
//     // STEP C: Filter High Earners (> 50,000)
//     const highEarners = getHighSalaryEmployees(employees, 50000);
//     console.log(`📊 Found ${highEarners.length} active high earners.`);
//     // STEP D: Transform to formatted summaries
//     const summaries = formatEmployeeSummaries(highEarners);
//     // STEP E: Display Output
//     console.log("\n--- HIGH EARNER DIRECTORY ---");
//     summaries.forEach((summary, index) => {
//       console.log(`${index + 1}. ${summary}`);
//     });
//     // STEP F: Specific Search Demonstration
//     const targetId = 104;
//     const targetUser = findEmployeeById(employees, targetId);
//     console.log(`\n🔍 Search Result for ID ${targetId}:`, targetUser?.name ?? "Not found");
//   } catch (error) {
//     console.error("❌ Error encountered in app execution:", error.message);
//   } finally {
//     console.log("\n🏁 Application execution completed.");
//   }
// }
// // Execute the application flow
// runApplication()
//_________--------------------------//--------------------__-
// async function getUsers() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log(users);
// }
// getUsers();
// async function getUsers() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log(users);
//     console.log(response.ok);
//     const tres = users.filter(user=> user.id <= 5);
//     console.log(tres);
// }
// getUsers();


