// ==============================
// 1️⃣ let, const, var Example
// ==============================

function variableExample() {
    var a = 10;      // Function scoped
    let b = 20;      // Block scoped
    const c = 30;    // Block scoped & cannot reassign

    console.log("var:", a);
    console.log("let:", b);
    console.log("const:", c);
}

variableExample();


// ==============================
// 2️⃣ Fruits Array - Return Second Fruit
// ==============================

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit() {
    return fruits[1];
}

console.log("Second Fruit:", getSecondFruit());


// ==============================
// 3️⃣ Push & Pop Example
// ==============================

function modifyArray(arr) {
    arr.push("NewElement");  // Add element
    arr.pop();               // Remove last element
    return arr;
}

console.log("Modified Array:", modifyArray([1, 2, 3]));


// ==============================
// 4️⃣ Square Numbers using map()
// ==============================

const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

console.log("Squared Numbers:", squareNumbers(numbers));


// ==============================
// 5️⃣ Filter Odd Numbers using filter()
// ==============================

function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log("Odd Numbers:", getOddNumbers([1, 2, 3, 4, 5, 6]));


// ==============================
// 6️⃣ Person Object Greeting
// ==============================

const person = {
    name: "Jay",
    age: 22,
    occupation: "Developer"
};

function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}. I am ${obj.age} years old and I work as a ${obj.occupation}.`);
}

greetPerson(person);


// ==============================
// 7️⃣ Rectangle Area
// ==============================

function calculateArea(rect) {
    return rect.width * rect.height;
}

console.log("Rectangle Area:", calculateArea({ width: 10, height: 5 }));


// ==============================
// 8️⃣ Object Keys
// ==============================

function getObjectKeys(obj) {
    return Object.keys(obj);
}

console.log("Object Keys:", getObjectKeys({ name: "Jay", age: 22, city: "Pune" }));


// ==============================
// 9️⃣ Merge Objects using Object.assign()
// ==============================

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const objA = { name: "Jay" };
const objB = { age: 22 };

console.log("Merged Object:", mergeObjects(objA, objB));


// ==============================
// 🔟 Sum using reduce()
// ==============================

const nums = [10, 20, 30, 40];

function sumNumbers(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

console.log("Sum of Numbers:", sumNumbers(nums));