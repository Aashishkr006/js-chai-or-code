//  Primitive data type

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
//id change to andar ka chij same bhee rahe to koi fark nhi kyu ki we laga id hai so symbol anag//

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) data types

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
//{} => iske andar jo bhee store hai wo object hai and [] => ye array

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// *********** for interview check all data type and remember or go through the website and learn kiska data type kya hai ********//