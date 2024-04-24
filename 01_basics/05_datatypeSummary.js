/* The categorisation of datatype in js is 2 on the basis of storing and accessing data in memory
1 => Primitive
2 => NON Primitive
*/
/*  Primitive data type :
(prmintive datatype are call by value , it means the changes which you do will happen in its copy not in original.)
*/

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
//id change ro andar ka chij same bhee rahe to koi fark nhi kyu ki woo alag id hai so symbol alag//

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