//  # Primitive DataTypes

//  7 types : String, Number, Boolearn, Null, 
//             Undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// const id = symbol('123')
// const anotherId = Symbol('123')

console.log(id === anotherId);
// const bigNumber = 345432567686543n

//  Reference (Non primitive)

//  Array, Objects, Functions

const heros =["Ironman", "Thor", "Hulk"]
let myObj = {
    Name : "jinny",
    age : 26,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);

//https://262.ecma-international.org/5.1/#sec-11.4.3

// ************************************************* Memory ******************************************************

// Stack memory(Primitive), Heap memory(Non-Primitive)
let myYoutubename = "jinnyjaindotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(let anothername : string);
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne 

userTwo.email = "jinny@google.com"

console.log(userOne.email);
console.log(userTwo.email);
