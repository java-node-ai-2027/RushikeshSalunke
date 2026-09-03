// ---------------- Object Literals(``<--this is literal) & Method   
const user1 = {
  name: 'Ram',
  age: 20,
  email: 'ram23@gmail.com',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
    console.log("hello "+this.name+" .");
    
  }
};



const user2 = {
  name: 'Priti',
  age: 25,
  email: 'priti25@gmail.com',
  greet() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
};

user1.greet();
user2.greet();


// -------- Constructor Functions & Prototypes

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// shared method
Person.prototype.greet = function () {
  console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
};
const rahul = new Person("Rahul", 25);
const priya = new Person("Priya", 25);

rahul.greet();
priya.greet();

//  Prototype Inheritance (Object.create)--------------------------
const employeeBase = {
  isHappy() {
    console.log(`${this.name} is totally happy!`);
  }
};

// Create a new object inheriting from employeeBase
const emp1 = Object.create(employeeBase);
emp1.name = "Rahul";
emp1.isHappy();


// ES6 Classes & Inheritance
class Employee {
  constructor(name, age) {
    this.name = name || 'notavailable';
    this.age = age || 0;
  }
  notifySalary() {
    console.log(`Salary credited in the morning to: ${this.name}`);
  }
}

// Derived subclass extending Employee
class TopPerformer extends Employee {
  constructor(name, age, ctc) {
    super(name, age); //  point to parent construc
    this.ctc = ctc;
  }
  showDetails() {
    console.log(`${this.name} is Top Performer with ${this.ctc}.`);
  }
}

const em1 = new Employee('Shruti', 27);
em1.notifySalary();

const em2 = new TopPerformer('Swati', 25, 40000);
em2.notifySalary();
em2.showDetails();


// Encapsulation
class BankAccount {
  #balance = 0; //# donate private 

  deposit(amount) {
    if (amount >= 500) {
      this.#balance += amount;
      console.log(`Successfully deposited: ${amount}`);
    } else {
      console.log('Deposit failed: Minimum deposit amount is 500.');
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(450); // Will show error message
myAccount.deposit(1000); // Successfully deposits
console.log(`Current Balance: ${myAccount.getBalance()}`);


/*
==================== output is here ====================
Hello, my name is Ram
hello Ram .
Name: Priti, Age: 25
Hello, I am Rahul and I am 25 years old.
Hello, I am Priya and I am 25 years old.
Rahul is totally happy!
Salary credited in the morning to: Shruti
Salary credited in the morning to: Swati
Swati is a Top Performer with a CTC of 40000.
Deposit failed: Minimum deposit amount is 500.
Successfully deposited: 1000
Current Balance: 1000
PS C:\Users\ADMIN\Desktop\Thinkitive\learning\RushikeshSalunke\src>   

*/




















/*
ignore it 
   export const add = (a, b) => a + b;
   export const multiply = (a, b) => a * b;
   export default function subtract(a, b) { return a - b; };
   import sub, { add, multiply } from "./mathHelper.js";

   console.log("Addition:", add(2, 3));
   console.log("Multiplication:", multiply(9, 2));
   console.log("Subtraction:", sub(100, 50));
*/