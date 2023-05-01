//Task 1


let persons0 = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'John', age: 23, city: 'Boston' }
];
 
persons0.groupName = 'A';
persons0.teacher = 'Joan Doe';
persons0.year = '2023';

for (let i = 0; i < persons0.length; i++) {
  console.log(persons0[i]);
}

for (let prop in persons0) {
  console.log(prop + ': ' + persons0[prop]);
}


//Task 2


//Використовуючи spread-оператор та метод Object.assign():
const defaults = { mode: 'test', debugLevel: 'error', logFolder: 'root' };
const userSetting = { mode: 'production', debugLevel: 'trace' };

const mergedSettings = Object.assign({}, defaults, userSetting);

console.log(mergedSettings); // { mode: 'production', debugLevel: 'trace', logFolder: 'root' }

//Використовуючи цикл for...in та метод Object.hasOwnProperty():
const defaults1 = { mode: 'test', debugLevel: 'error', logFolder: 'root' };
const userSetting1 = { mode: 'production', debugLevel: 'trace' };

const mergedSettings1 = {};

for (let prop in defaults1) {
  if (defaults1.hasOwnProperty(prop)) {
    mergedSettings1[prop] = defaults1[prop];
  }
}

for (let prop in userSetting1) {
  if (userSetting1.hasOwnProperty(prop)) {
    mergedSettings1[prop] = userSetting1[prop];
  }
}

console.log(mergedSettings1); // { mode: 'production', debugLevel: 'trace', logFolder: 'root' }

//Використовуючи метод Object.entries(), метод Array.reduce() та тернарний оператор:
const defaults2 = { mode: 'test', debugLevel: 'error', logFolder: 'root' };
const userSetting2 = { mode: 'production', debugLevel: 'trace' };

const mergedSettings2 = Object.entries({...defaults2, ...userSetting2}).reduce((obj, [key, value]) => {
  obj[key] = obj.hasOwnProperty(key) ? obj[key] : value;
  return obj;
}, {});

console.log(mergedSettings2); // { mode: 'production', debugLevel: 'trace', logFolder: 'root' }


//Task 3


// Функція для обчислення року народження на основі віку
function calculateYearOfBirth(age) {
  const currentYear = new Date().getFullYear();
  return currentYear - age;
}

// Додамо геттер до об'єкта person
const person = persons0[0];
Object.defineProperty(person, 'yearOfBirth', {
  get: function() {
    return calculateYearOfBirth(this.age);
  },
});

// Використовуємо геттер для отримання року народження
console.log(person.yearOfBirth); 


//Task 4


//Метод concat(): цей метод об'єднує два масиви і повертає новий масив, що містить всі елементи обох масивів. Наприклад:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]

//Оператор spread: цей оператор дозволяє розгорнути масив в окремі елементи. Таким чином, два масиви можна об'єднати,
//розгорнувши їх за допомогою оператора spread і передавши ці елементи в новий масив.Наприклад:

const arr11 = [1, 2, 3];
const arr22 = [4, 5, 6];
const arr33 = [...arr11, ...arr22]; // [1, 2, 3, 4, 5, 6]

//Метод push(): цей метод додає нові елементи до масиву, але можна використовувати його для додавання елементів з
//іншого масиву в кінець поточного масиву.Наприклад:

const arr111 = [1, 2, 3];
const arr222 = [4, 5, 6];
arr111.push(...arr222); // arr1 стає [1, 2, 3, 4, 5, 6]


//Task 5


const persons2 = [
  { name: 'John', age: 23, city: 'Boston', birthYear: 2000 },
  { name: 'Mary', age: 30, city: 'New York', birthYear: 1993 },
  { name: 'Peter', age: 45, city: 'Chicago', birthYear: 1978 },
  { name: 'Sarah', age: 19, city: 'Los Angeles', birthYear: 2004 },
  { name: 'David', age: 28, city: 'San Francisco', birthYear: 1995 }
];

const textFragments1 = persons2.map(person =>
  `${person.name} from ${person.city} born in ${person.birthYear}`);

console.log(textFragments1);


//Task 6


const personsOver20 = persons2.filter(person => person.age > 20);

console.log(personsOver20);


//Task 7

const person3 = { name1: 'John', age: 23, city: 'Boston' };
const { name1, city } = person3;

console.log(name1); // виведе "John"
console.log(city); // виведе "Boston"

const persons4 = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Sarah', age: 32, city: 'New York' },
  { name: 'David', age: 41, city: 'Chicago' }
];

const [firstPerson] = persons4;

console.log(firstPerson); 


// Task 8


const persons5 = [
  { name3: 'John', age3: 23, city3: 'Boston', year3: 2000 },
  { name3: 'Mary', age3: 18, city3: 'New York', year3: 2005 },
  { name3: 'Bob', age3: 30, city3: 'Chicago', year3: 1991 },
];

function getUserData(name3) {
  const user = persons5.find(person5 => person5.name3 === name3);
  if (!user) {
    throw new Error('Unable to find user');
  }
  return user;
}

function showUserInfo(name3) {
  console.log('Loading');
  try {
    const userData = getUserData(name3);
    console.log(userData.name3, userData.age3, userData.city3, userData.year3);
    console.log('Loading finished');
  } catch (error) {
    console.error(error.message);
    console.log('Loading finished');
  }
}

showUserInfo('John'); // Output: Loading, John 23 Boston 2000, Loading finished
showUserInfo('Anna'); // Output: Loading, Error: Unable to find user, Loading finished


// Task 9

function textToLetters(text) {
  return text.split("");
}

console.log(textToLetters("Hello World!")); 


// Task 10

function reverseWord(word) {
  return word.split("").reverse().join("");
}

console.log(reverseWord("hello")); 


// Task 11

function isJSFile(fileName) {
  return fileName.endsWith(".js");
}

console.log(isJSFile("script.js")); 
console.log(isJSFile("styles.css")); 

// Task 12

function sentenceToWords(sentence) {
  return sentence.split(" ");
}

console.log(sentenceToWords("The quick brown fox jumps over the lazy dog"));



// Task 13

function replaceWord(text, oldWord, newWord) {
  return text.replace(oldWord, newWord);
}

console.log(replaceWord("The quick brown fox jumps over the lazy dog", "lazy", "sleeping"));


