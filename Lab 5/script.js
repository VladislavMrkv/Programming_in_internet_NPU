//Task 1

function average(...nums) {
  if (nums.length === 0) {
    return 0;
  }

  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  return sum / nums.length;
}

console.log(average(2, 4, 6)); 
console.log(average(10, 20, 30, 40, 50)); 
console.log(average()); 

//task 2

function values(f, low, high) {
const result = [];
for (let i = low; i <= high; i++) {
result.push(f(i));
}
return result;
}

function square(x) {
return x * x;
}

const vals = values(square, 1, 5);
console.log(vals); 

//task 3

function callWithContext(obj, callback) {
  callback.call(obj);
}

const person = {
  name: "John",
  age: 30,
  birthday: "01/01/1990"
};

function birthdayCallback() {
  const today = new Date().toLocaleDateString();
  console.log(`Today is ${today}! Happy birthday ${this.name}.`);
}

callWithContext(person, birthdayCallback);

//task 4

function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
    },
    getValue() {
      return count;
    }
  }
}

const counter = createCounter();
counter.increment();
console.log(counter.getValue()); 
counter.increment();
console.log(counter.getValue()); 

//task 5

function getGreeting() {
  let lastCall = {};

  return function (name) {
    if (lastCall.name === name) {
      console.log(`Returning cached greeting for ${name}: ${lastCall.greeting}`);
      return lastCall.greeting;
    } else {
      const greeting = `Hello ${name}`;
      lastCall = { name, greeting };
      console.log(`Generating new greeting for ${name}: ${greeting}`);
      return greeting;
    }
  }
}

const greet = getGreeting();
console.log(greet('Alice')); 
console.log(greet('Bob')); 
console.log(greet('Bob')); 

//task 11

function cacheLastCall(func) {
  let lastArgs = null;
  let lastResult = null;
  let lastCallTime = null;
  const cacheTime = 10000; // 10 seconds

  return function(...args) {
    const now = Date.now();
    if (lastArgs && JSON.stringify(args) === JSON.stringify(lastArgs) && now - lastCallTime < cacheTime) {
      console.log("Returning cached result");
      return lastResult;
    }
    lastArgs = args;
    lastCallTime = now;
    lastResult = func(...args);
    return lastResult;
  };
}

//example of task 11:
function getTime() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

const cachedGetTime = cacheLastCall(getTime);

console.log(cachedGetTime()); 
setTimeout(() => {
  console.log(cachedGetTime()); 
}, 5000);
setTimeout(() => {
  console.log(cachedGetTime()); 
}, 10000);

//task 10

function logExecution(callback) {
  return function(...args) {
    const functionName = callback.name || "anonymous function";
    console.log(`Calling ${functionName} with args: ${args} at ${new Date()}`);
    return callback(...args);
  }
}

function myFunction(a, b) {
  console.log(a + b);
}

const loggedFunction = logExecution(myFunction);
loggedFunction(2, 3);

//task 9

//call
function greet1() {
  console.log(`Hello, ${this.name}!`);
}

const person1 = {
  name: 'John'
};

greet1.call(person1); // виведе "Hello, John!"

//apply
function greet2(greeting2) {
  console.log(`${greeting2}, ${this.name}!`);
}

const person2 = {
  name: 'John'
};

greet2.apply(person2, ['Hi']); // виведе "Hi, John!"

//bind
function greet3(greeting3) {
  console.log(`${greeting3}, ${this.name}!`);
}

const person3 = {
  name: 'John'
};

const greetPerson3 = greet3.bind(person3, 'Aloha');

greetPerson3(); // виведе "Hi, John!"

//task 8

const capitalizeProperty = (arr, prop) => {
  return arr.map(obj => ({
    ...obj,
    [prop]: obj[prop][0].toUpperCase() + obj[prop].slice(1)
  }));
};

// Приклад використання
const people = [
  { name: 'john', age: 25 },
  { name: 'jane', age: 30 },
  { name: 'bob', age: 40 }
];

const capitalizedPeople = capitalizeProperty(people, 'name');
console.log(capitalizedPeople);
// [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Bob', age: 40 }]
