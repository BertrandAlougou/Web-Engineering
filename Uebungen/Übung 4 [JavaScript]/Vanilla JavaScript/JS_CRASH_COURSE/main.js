
/**Console**/

//alert("Hello World!");
console.log("Hello World!");
console.error("This is an error");
console.warn("This is a warning");



/** Variables  [var, let, const] **/

//let - with let with can reassign values

let score;
score = 10;
score = 11;
console.log(score);

//const - constant and is much code secure. Always use it unless you know you are going to reassign the value
const constant_age = 32;
console.log(constant_age);


//For most of the time, you are not going to reassign the values as above, especially when dealing with Arrays


/**Datatypes**/

//1. Primitive Datatypes [string, Numbers, Boolean, null, undefined]

const name = 'John'; //string
const age = 30; //Number
const rating = 4.5; //Decimal --> Number
const isCool = true; //Boolean
const x = null; //empty
const y = undefined; // undefined
let z; // undefined

//Testing the variable types

console.log( typeof name );
console.log( typeof age );
console.log( typeof rating );
console.log( typeof isCool );
console.log( typeof x );  // This returns object which is an error and it's a bogus
console.log( typeof y );
console.log( typeof z );


//Concatenation with String
console.log( "My name is" + name + ' and I am' + age );

//Template String or Literal
console.log( `My name is ${name} and I am ${age} ` );

//Alternatively
const hello = `My name is ${name} and I am ${age} `;
console.log( hello );


//String properties and Methods

const s = 'Hello World!';
console.log( s.toUpperCase() );
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));

//Scenario for split - we have a blog post, and we must add a tag
const s1 = ' technology, computers, it, code'; //we want to create an array from this string. As a comma-separator, we are going to use space
console.log( s1.split(', ') ); // This is very pretty because you can insert it into a database, search to it etc


/** Arrays - variables that hold multiple values**/

const numbers = new Array(1, 2, 3, 4, 5); //using a constructor
const fruits =['apples', 'oranges', 'pears'];
console.log( fruits );

//Javascript is not statically typed for example when creating an Array. You can use TypeScript which is a superset of javascript since it has some added features

fruits[3] ='grapes'; // Like in this case you can manipulate an array, but you can reassign the value of an entire array as already mentioned
console.log( fruits );

//Adding an element in an array in a better way using the push() method

fruits.push('mangoes');


//Add an element to the beginning of the array
fruits.unshift('strawberries');

//Take the last element off
fruits.pop();

//Check to see if something is in an array
console.log( Array.isArray( 'hello') );

//Get the index of a certain value
console.log(fruits.indexOf('oranges'));
console.log(fruits);


/**Object Literals**/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        streets: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
alert(person); //not a good way

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);
//create variables - part of ES6 - pretty new

const {firstName, lastName } = person;
console.log(firstName);


//directly adding properties

person.email = 'john@gmail.com';
console.log(person.email);


//Arrays of Objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: true
    }
];

console.log(todos);
console.log(todos[1]);


/** JSON FORMAT **/

//Similar to Object Literals

const todoJSON = JSON.stringify(todos); //converting data into json to be sent to a server

console.log(todoJSON);




/** Loops **/
// For

for (let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}


//While


let i =0;
while (i<10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

//Looping through arrays

/*
for (let i = 0; todos.length; i++) {
    console.log(todos[i].text);
} // not the best way
*/

//better way
for (let todo of todos){
    console.log(todo.text.id);
}


// forEach, map, filter

todos.forEach(function (todo){
    console.log(todo.text);
});

const todoText = todos.map(function (todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function (todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);

const todoCompletedWithMap = todos.filter(function (todo){
    return todo.isCompleted === true;
}).map(function (todo){
    return todo.text;
});
console.log(todoCompletedWithMap);



/** Conditionals **/
const x1 = 6;
const x2 = 10;

if(x1 > 5 || x2 > 10){
    console.log('x1 is more than 5 or x2 is more than 10');
} else if (x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}


// Ternary operator (condition ? x : y) - shorthand if statement

const x3=10;

const color = x3 > 10? 'red' : 'blue';

console.log(color);


// switches

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

/** Functions **/

//OOP with ES5
function addNums (num1=1, num2=2) {
    console.log(num1 + num2);
}

addNums(5,5);


//Alternatively

function addNums1 (num1=1, num2=2) {
    return num1 + num2;
}

console.log(addNums1(4,5));


// Arrow functions - introduced in ES6 or ES2015


const addNums2 = (num1=1, num2=2) => num1 + num2;
console.log(addNums2(5,5));

todos.forEach((todo) => console.log(todo)); // It also has advantages when using the Lexical this


/** OOP **/

// We have already looked at object Literals, However we can construct objects using the constructor function

// 1. Using Constructor functions with prototypes

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.getBirthYear = function (){
        return this.dob.getFullYear();
    }
}

//Prototype
Person.prototype.getBirthYear = function (){
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function (){
    return `${this.firstName} ${this.lastName}`;
}

//Instantiate object
const  person1 = new Person('John', 'Doe', '4-3-1980');
const  person2 = new Person('Mary', 'Smith', '3-6-1970');

//console.log(person2.dob.getFullYear());

console.log(person1);
console.log(person2);
console.log(person1.getBirthYear());

// 2. Using ES6 or ES2015 classes (OOP)

class Person1 {
    constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
//Instantiate object
const  person3 = new Person('John', 'Doe', '4-3-1980');
const  person4 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person3.getFullName());
console.log(person4);







