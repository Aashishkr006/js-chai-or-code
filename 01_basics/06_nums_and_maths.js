const score = 400;
// console.log(score);

// const balance = new Number(100.58);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.98745

// console.log(otherNumber.toPrecision(4));

const countNum = 100000000;
// console.log(countNum.toLocaleString('en-IN'));


// ++++++++++++ Maths +++++++++++//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.58));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(7,5,8,2,9));
console.log(Math.max(58,25,4,289,555));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10+1));

// Maths.ramdom gives value between (0,1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) +min);  //This is the formula to find random number between any two number 
