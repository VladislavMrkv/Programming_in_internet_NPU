console.log('     TASK 1');

//constructor
function Car1(brand1, model1, year1) {
  this.brand = brand1;
  this.model = model1;
  this.year = year1;
}

let myCar1 = new Car1("Toyota", "Camry", 1999);
console.log(myCar1);

//class
class Car2 {
  constructor(brand2, model2, year2) {
    this.brand = brand2;
    this.model = model2;
    this.year = year2;
  }

  //added for task2{
  getInfo() {
     return `${this.brand2} ${this.model2}, ${this.year2}`;
  }
  //}
}

let myCar2 = new Car2("Volkswagen", "Golf GTI", 2008);
console.log(myCar2);

console.log('     TASK 2');

const car1 = Object.create(Car2.prototype);
car1.brand2 = 'Bugatti';
car1.model2 = 'Veyron';
car1.year2 = 2003;

const car2 = Object.create(Car2.prototype);
car2.brand2 = 'BMW';
car2.model2 = 'M5 Competition';
car2.year2 = 2023;

console.log(car1.getInfo()); 
console.log(car2.getInfo()); 

console.log('     TASK 3,4');

function Person(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
}

Person.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
}

Person.prototype.getAge = function() {
  const currentYear = new Date().getFullYear();
  return currentYear - this.birthYear;
}

function Employee(firstName, lastName, birthYear, position) {
  Person.call(this, firstName, lastName, birthYear);
  this.position = position;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.getFullName = function() {
  return this.position + ' ' + this.firstName + ' ' + this.lastName;
}

const person1 = new Person('John', 'Doe', 1970);
console.log(person1.getFullName()); 
console.log(person1.getAge()); 

const employee1 = new Employee('Jane', 'Smith', 1975, 'Manager');
console.log(employee1.getFullName()); 
console.log(employee1.getAge()); 
console.log(employee1.position); 

console.log('     TASK 5');

function checkClass(obj1, obj2) {
  if (obj1 instanceof obj2.constructor && obj2 instanceof obj1.constructor) {
    console.log(`Both objects are instances of ${obj1.constructor.name} class`);
  } else {
    console.log("Objects are not instances of the same class");
  }
}

//example
class Person2 {
  constructor(name) {
    this.name = name;
  }
}

class Employee2 extends Person2 {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
}

const person2 = new Person2("John");
const employee2 = new Employee2("Jane", "Manager");

checkClass(person2, employee2); 
checkClass(person2, new Person2("Bob")); 
checkClass(employee2, new Employee2("Alice", "Assistant")); 

console.log('     TASK 6');

class ObservedPerson {
  constructor(person) {
    this.person = person;
    this.calls = new Map(); // об'єкт для зберігання кількості викликів
  }

  // декоратор для логування кількості викликів метода
  countCalls(methodName) {
    return (...args) => {
      if (!this.calls.has(methodName)) {
        this.calls.set(methodName, 0);
      }
      this.calls.set(methodName, this.calls.get(methodName) + 1);

      console.log(`Method ${methodName} was called ${this.calls.get(methodName)} times`);

      return this.person[methodName](...args);
    }
  }

  // додамо декоратор до кожного методу
  getFullName = this.countCalls('getFullName').bind(this);
  getAge = this.countCalls('getAge').bind(this);
}

// створимо екземпляр класу Person
class Person6 {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    const today = new Date();
    const birthDate = new Date(this.birthYear, 0);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    } else {
      return age;
    }
  }
}

const person = new Person6('John', 'Doe', 1990);
const observedPerson = new ObservedPerson(person);

// виклик методів ObservedPerson
observedPerson.getFullName(); // Method getFullName was called 1 times
observedPerson.getAge(); // Method getAge was called 1 times
observedPerson.getAge(); // Method getAge was called 2 times

console.log('     TASK 7');

class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error('Abstract classes cannot be instantiated');
    }
  }

  getArea() {
    throw new Error('Method not implemented');
  }

  getPerimeter() {
    throw new Error('Method not implemented');
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const rectangle = new Rectangle(5, 10);
console.log('Rectangle area:', rectangle.getArea());
console.log('Rectangle perimeter:', rectangle.getPerimeter());

const circle = new Circle(7);
console.log('Circle area:', circle.getArea());
console.log('Circle circumference:', circle.getPerimeter());

console.log('     TASK 8');

class Shape2 {
  getArea() {}
  getPerimeter() {}
}

class Circle2 extends Shape2 {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Square2 extends Shape2 {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }

  getPerimeter() {
    return 4 * this.side;
  }
}

class Rectangle2 extends Shape2 {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// створення масиву фігур
const shapes = [
  new Circle2(5),
  new Square2(7),
  new Rectangle2(4, 6)
];

// виклик методів для кожної фігури
shapes.forEach(shape2 => {
  console.log(`Area: ${shape2.getArea()}`);
  console.log(`Perimeter: ${shape2.getPerimeter()}`);
});
