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

const employees = [
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













