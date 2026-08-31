console.log('-------------Js------------');
// let user = {
//     name :'ram',
//     age : 20 ,
//     email:'ram23@gmail.com'
// }
// user.greet = function() {
//     console.log(this.name);
// };
// let user2 ={
//     name : 'priti',
//     age : 25
// };
// user2.greet = function() {
//     console.log(this.name+" "+this.age);
// };
// console.log(user);
// console.log(user2);

// //---------------------------------------
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let user1 = new User("Rahul", 25);
// const use2 = new User("priya",25);
// console.log(user1.name);
// console.log(use2.name+" "+use2.age);


// User.prototype.greet = function(){
//     console.log();
// }
//--------------------------------------------------------------------
// console.log('import and export of functon');

//import { Addition } from "./mathHelper";
//import { mathHelper } from './mathHelper';
//import { mathHelper } from './mathHelper.js';

// let sum = Addition(5,19);
// console.log(Addition(1,2));
// console.log('import and export of function');

// //import { Addition } from './mathHelper.js';

// let summ = Addition(5, 19);
// console.log(summ); // Logs 24
// console.log(Addition(1, 2)); // Logs 3


// import { add} from "./mathHelper.js";
// console.log("Addition:", add(2, 3));
// import {multiply } from "./mathHelper.js"
// console.log("Multiplication:", multiply(9,2 ));

// import sub from "./mathHelper.js";
// console.log(sub(100,50));


//------------------------------------------------------------
// let Emp = {
//     // name : 'priti',
//     // age : 26 ,
//     isHappy(){
//         console.log(this.name+"  is Totally Happy ");
//     }
// };
// let E1 = Object.create(Emp);
// Emp.name = "rahul";
// E1.isHappy();
//-------------------------------------------------------
// class Thik{
//     constructor(name , age){
//         this.name = name ;
//         this.age = age ;
//     }
//      gotsal(){
//         console.log('The sal creadited in morning  to person -> '+this.name);
//     }         
// }
//  let u1 = new Thik();
//  console.log(u1);
//  let u2 = new Thik();
//  const u3 = new Thik('shruti',27);
//  console.log(u3);
//  u3.gotsal(); 

//  class Thimkitive extends Thik{
//      constructor(name , age ,ctc){
//         super(name,age);
//         this.ctc = ctc; 
//      }
//      gotmarried(){
//         console.log("the emp name  is "+this.name+" and he is a Top Performer ");
//         }
//  }
 
//  let CEO = new Thimkitive('swati',25 ,40_000);
//  console.log(CEO);
//  CEO.gotsal();
//  CEO.gotmarried();
//------------------------------------------------------
// class SBI{
//  #balance = 0;
//  deposit(amt){
//     if(amt>500){
//         this.#balance +=amt ;
//     }else{ console.log('amt is very less ')}
//  }
//  showbal(){
//     return this.#balance;
//  }
// }
// let Bank = new SBI();
// Bank.deposit(450);
// console.log(Bank.showbal());
// // #not allow bcoz private   


//-------------------------------------------- upto day 24-aug-2026-----------------
// -------------------------------
// -- day tuesday 25-aug-26---  after SSH configuration --------------

// let date = new Date();
// console.log(date.toString());
// console.log("the "+date.setUTCMonth());
// console.log(date.getFullYear());

// let u1 = {
//     name:'a',
//     age :22,
//     sal : 2500,
//     isMarried : false
// };
// console.log(u1);
// console.log("=============");
// delete u1.name;
// console.log(u1);

//  const stud = [
//     {
//         name : 'A',
//         age : 25,
//         pkg : "25lpa"
//     },
//     {
//         name : 'B',
//         age : 29,
//         pkg : "20lpa"
//     }
//  ];
//  console.log(stud[1]);
//  console.log(stud.map(a => a.pkg));
//  //tudents.map(s => s.name);
//  console.log("--");
 
// const students = new Map();
// students.set("Rushi", 9975950);
// students.set("Rahul", 25552);
// students.set("Rushi", 876512);
// console.log(students);

// let obj = {
//     name : 'A',
//     address : {
//         city:"jalg",
//         pin : 23
//     },
//     age :22
// };
// console.log(obj.address?.city); 
// let u1 = {
//     name:'a',
//     age :22,
//     sal : 2500,
//     isMarried : false
// };
// console.log(u1);
// console.log("=============");
// JSON.stringify(u1)

// // ================= Operation =================
// const arr = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90];
// //total
//  const totall = arr.reduce((sum,arr) => { return sum+=arr ;
//  },0);
//  console.log(totall+" total ");
//  //
// const avgg = totall / arr.length;
// console.log(avgg+' is avg');
// //
// let high = arr.reduce((max,arr)=>{
//     return max > arr ? max : arr;
// },arr[0]); // wy we take arr[0]  iam quiet confused here 
// console.log(high);
// //
// const passedd = arr.reduce((count , arr) => {
//     if(arr >= 50 ){
//     count++;
//   }
//   return count;  
//  },0);
//  console.log(passedd+" passed");

//-------------------------------------------------map()  , map
// ================= MAP ================= 
// const emp =new Map();
// emp.set(1,"ram");
// emp.set(2,"sham");
// emp.set(3,'prit');
// emp.set(3,'sruti');
// emp.set(4,'kirti');
// console.log(emp.get(1));
// console.log(emp.has(5));
// console.log(emp.size);
// console.log(emp);
// for (const [a, n] of emp) {
//     console.log(a, n);
// };
// for(let [x,y] of emp){
//     console.log(y);
// };

// const num = [10,20,30,4,50,60,70,80,90];
// let uninum = new Set(num);
// console.log(uninum);
// /// above is Set and below is array 
// let res = [...uninum];
// console.log(res);

// uninum.add(100);
// console.log(uninum);
// console.log(uninum.has(20)); // true/false 
// uninum.delete(30);
// console.log(uninum);

 //optional chanining 
// let obj = {
//     name : "ankita",
//     age : 24,
//     add : {
//          city: "pune",
//         post : "thergaon"
//     },
//     native : 'jalgaon'
// };
// console.log(obj.name);
// console.log(obj.add?.city);

// let uname = 'priti' ;
// let uname = null;
// let name = uname ?? "ramayan";
// console.log(name);

// let age ;
// //let age = 92 ;
// let uage = age ?? 25;
// console.log(uage);

// //----------------------&& and ||---------------
// let isok = true ;
// isok && console.log("welcome to Fun Zone");
// // ||"If the first value is falsy, use the second value."
// const isOk = false ;
// isOk || console.log("welcome to pain zone");
//---------------------------------------------
// let obj1 = {
//     name : "Kalyani",
//     age : 24,
// };

// let obj2 = obj1 ;
// console.log(obj1);
// console.log(obj2);
// obj2.name="prit"; // it change whole reff
// console.log(obj2);
// console.log(obj1);

//----------------------------------------
// let obj1 = {
//     name : "Kalyani",
//     age : 24,
// };

// let obj2 = {
//     ...obj1
// } ;

// console.log(obj1);
// console.log(obj2);
// console.log(obj2.name="prit"); // 2 diff obbject 
// console.log(obj2);
// console.log(obj1);
//------------------- but it diff iin a nested -------------------------
// let obj1 = {
//     name : "ankita",
//     age : 24,
//     add : {
//          city: "pune",
//         post : "thergaon"
//     },
//     native : 'jalgaon'
// };

// let obj2 = { ...obj1};

// console.log(obj1);
// console.log(obj2);
// obj2.add.city = "KOKAN"; // this change all to kokan 
// console.log(obj1);
// console.log(obj2);

// // so for that we do deep copy 
// let obj3 = structuredClone(obj1);
// obj3.add.city = "Kolhapur" ;
// console.log(obj2);// kokan bcoz orevoious changed it 
// console.log(obj3); // kolhapur

//--------------------------------------
// let o1 = {
//     name : "ankita",
//     age : 24,
//     add : {
//          city: "pune",
//         post : "thergaon"
//     },
//     native : 'jalgaon'
// };

// let k = Object.keys(o1);
// console.log(k);
// let v = Object.values(o1);
// console.log(v);
// let ent = Object.entries(o1);
// console.log(ent);


//-------------------------------------------------------
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// let arr1 = arr.map(a => a*2);
// console.log(arr1);
// let arr2 = arr1.filter(val => val % 2 == 0 );
// console.log(arr2);



// let joindate = new Date("2026-08-29");
// let  today = new Date();

// if(joindate < today){
//     console.log("already joined ");
// }else{
// //     console.log("not joined yet");
// // }

// //-----------------------------------
// let emp = [
//     { name : "ankita", age : 23 , native : 'dhule'    },
//     { name : "rmama", age : 23 , native : 'jalgao'     },
//     { name : "shruti", age : 23 , native : 'jalgao'    }
// ] ;

// const res =emp 
//         .filter(({native}) => native == 'jalgao')
//         .map(({name})=> name);

// console.log(res);
        
//---------------------------------------------
const numbers = [10, 20, 30, 40, 50];
// let add = numbers.reduce((sum, number) => sum+= number);
// console.log(add);
// let large = numbers.reduce((a,b) => {
//   return a>b ? a : b ; 
// });
// console.log(large);

// let counter = numbers.reduce((val ,numbers)=>{
//     // var count = 0; 
//     if(numbers >= 50){
//         val++;
//     }
//     return val;
// });
// console.log(counter);

 // const passedd = numbers.reduce((count , arr) => {
//     if(arr >= 50 ){
//     count++;
//   }  // revise it 
//   return count;  
//  },0);
//  console.log(passedd+" passed");

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(1);
// set.add(3);
// set.add(2);
// set.add(3);
// set.add(2);
// set.add(6);
// set.add(9);

// console.log(set);
// const pattern = /hello/;
// console.log(pattern.test("hello world"));
// console.log(pattern.test("Hello world"));//H


// let employees = [
//  {   name: "a",
//     salary : 25000
// },{   name: "a",
//     salary : 25000
// },{   name: "a",
//     salary : 25000
// }
// ];
// employees.map(({ name, salary }) => {
//     return `${name}: ${salary}`;
// });

//--------------------------------------------------------

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

//--------------------------------------------------------

// const employees = [
//     {
//         id: 101,
//         name: "Rahul",
//         department: "IT",
//         salary: 50000,
//         skills: ["JS", "Node"],
//         active: true
//     },
//     {
//         id: 102,
//         name: "Amit",
//         department: "HR",
//         salary: 40000,
//         skills: ["Recruitment"],
//         active: false
//     },
//     {
//         id: 103,
//         name: "Priya",
//         department: "IT",
//         salary: 60000,
//         skills: ["JS", "React"],
//         active: true
//     }
// ];


//--------------------------------------------------------- DOM ---------------------------
// let a = document.querySelector("h1");
// let a = document.querySelector("h1").innerHTML = 'jay maharashtra ';
// a.innerHTML = "hello";

// a.style.color = 'pink';
// a.style.backgroundColor = 'black'
// a.addEventListener('click',function(){
//  console.log('welome event listner');
//  a.style.color = "yellow";
//  a.style.backgroundColor = "black";
//  a.innerHTML = "Ramdwarar jagat Jalgaon  and having a Millions of Devotiee";
// });

// //----------------------------------------  for Dom 
// let flag = 0 ;
// let bulb  = document.querySelector("#id1");
// let butttnnnn = document.querySelector("button");
// butttnnnn.addEventListener("click",function(){
//     if(flag == 0){
//     bulb.style.backgroundColor = 'yellow' ;
//     console.log("light lagla ");
//     flag = 1 ;
//     }else{
//         bulb.style.backgroundColor = 'black' ;
//         console.log("light OFF ");
//         flag = 0 ;
//     }
// })
//-------------------------------------------------------------------------

// let arr = [1,2,3,4,5,6,7,8,9,10]; 
// // let sum= 0 ;
// // for(let a of arr){
// //     sum += a;   
// //     console.log(sum); 
// // };

// let summ = arr.reduce((acc,curr)=> acc+curr,1 );
// console.log(summ);

//--------------------------------------------------
// const users = [
//     { name: "A", age: 20 },
//     { name: "B", age: 25 },
//     { name: "C", age: 30 }
// ];
// // const result = users.reduce((obj, user) => {
// //     obj[user.name] = user.age;
// //     return obj;
// // }, {});
// // console.log(result);

// const res = users.reduce((a,b)=>{
//     a[b.name] = b.age;
//     return a;
// },{});
// console.log(res);
// //------------------map 
// const u1 =new Map();
// u1.set("uu1","rushi");
// u1.set('uu2',"priti");
// u1.set("uu3","shruti");
// console.log(u1.get('uu1'));
// console.log(u1.get('uu2'));
// for(let [id,name ] of u1){
//     console.log(`${id}: ${name}`);
// }

// const title = document.querySelector("#title");
// console.log(title);
// //title.textContent = "Welcome";


//------------------------------------------------------------

// let students = [
//     { id: 1, name: "A", marks: 80 },
//     { id: 2, name: "B", marks: 90 },
//     { id: 3, name: "C", marks: 70 }
// ];

// console.log(students.filter(s => s.marks < 80));
// console.log(students);
// console.log(Object.keys(students));
// console.log(Object.values(students));
// console.log(Object.entries(students));


// try {
//     let result = riskyOperation();
// } catch (error) {
//     console.log("Something went wrong");
// } finally {
//     console.log("Always runs this block ");
// }

// function riskyOperation(){
//     console.log('Johnson Line LAC');
// };


//----------------000000000==================
// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 2000);
// console.log("C");

// console.log("1");
// setTimeout(()=>{
//     console.log("2");
// },3000);
// console.log('3');


// //--------
//   let ourpromise  = new Promise((resolve,reject)=>{
//     const success = false ;
//     if(success){
//         resolve("data got 100%")
//     }else{
//         reject("not received ")
//     }
//   });

// ourpromise
//       .then((result)=>{
//      console.log(result);
//      })
//      .catch((error)=>{
//       console.log(result);
//      });

//----------------------------------------------------
// class stud {
//     constructor(name , age){
//         this.name = name ;
//         this.age = age ;    
//     }
//     welcome(){
//         console.log(`Hello welcome ${this.name} now u become ${this.age} year old `);
//     }
// }
// let s1 = new stud("priti",24);
// s1.welcome();

// //2 inheritance 
// class animal{
//     walk(){
//         console.log("animal is running");
//     }
// }
// class Dog extends animal{
//     bark(){
//         console.log("dog may bite");
//     }
// }
// let obj1 = new Dog();
// obj1.walk();
//obj1.bark();

// class animal{
//     bark(){
//         console.log("animal is running");
//     }
// }
// class Dog extends animal{
//     bark(){
//         console.log("dog may bite");
//     }
// }
// let obj1 = new Dog();
// obj1.bark();

//
// const items = document.querySelectorAll(".text");
//  items.forEach((item) => {
//     item.addEventListener("click", function() {
//     this.style.color = "crimson";
//     })
//   })

///////
// const btn = document.querySelector("#myBtn");
// btn.addEventListener("click", () => {
//   console.log("Button was clicked!");
// });

//console.log(username);


//--------------AI base study format just for Understanding -----------------------------------------------

// /**
//  * ==========================================
//  * TOPIC: READING & UNDERSTANDING EXISTING JS CODE
//  * ==========================================
//  * 
//  * 💡 QUICK MENTAL CHECKLIST (5-STEP METHOD):
//  * 1. PURPOSE   -> Manage employee records & simulate asynchronous API load.
//  * 2. STRUCTURE -> Data Store -> Data Processing -> Async API Simulation -> DOM / Execution Flow
//  * 3. DATA      -> Array of Employee Objects (id, name, role, salary, active)
//  * 4. FLOW      -> Fetch Data -> Filter High Earners -> Transform -> Display Result
//  * 5. DETAILS   -> Look for array methods (filter, map), async/await, and debugging breakpoints.
//  */

// // ==========================================
// // 1. DATA STORE (Initial State)
// // ==========================================
// const rawEmployeeData = [
//   { id: 101, name: "Rushi", role: "Developer", salary: 75000, active: true },
//   { id: 102, name: "Amit", role: "Designer", salary: 48000, active: true },
//   { id: 103, name: "Rahul", role: "QA Engineer", salary: 42000, active: false },
//   { id: 104, name: "Priya", role: "Tech Lead", salary: 95000, active: true },
//   { id: 105, name: "Neha", role: "DevOps", salary: 68000, active: true }
// ];

// // ==========================================
// // 2. DATA PROCESSING FUNCTIONS (Pure Functions)
// // ==========================================

// /**
//  * Filter employees earning above a threshold.
//  * INPUT: employees (Array), threshold (Number) -> OUTPUT: Filtered Array
//  */
// function getHighSalaryEmployees(employees, threshold = 50000) {
//   // Input validation check
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
// // ==========================================

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

//     // STEP B: Un-comment 'debugger;' to inspect variable states in DevTools!
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
// runApplication();


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


async function getyounguser(){
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error(`request failed to fetch ${response.status}`);
        }
        const user = await response.json();
        const young = user.filter(userr=>userr.id>=5);
        const name = young.map(userr => userr.name);
        return name ;
    } catch (error) {
        console.error("canot load the users ",error.message);
        return [];
    }
}

getyounguser().then(names =>{
    console.log("fetched user names :",names);
});








