const actor = ["SRK", "Salman" , "Shiddhart"];
const actoress = ["Shradha", "Alia" , "Priyanka"];

// actor.push(actoress);
// console.log(actor);
// console.log(actor[2]);

// actor.concat(actoress);
// console.log(actor);

// const newActors = actor.concat(actoress);
// console.log(newActors);

// push exhisting array pe hi push krta hai but concat new array form krta hai

const allCelebrities = [...actor, ...actoress];
console.log(allCelebrities);

// flat 

const marks = [20,60,2,[20,50,8,[50,65,2,[56,54,87]]]];
console.log(marks);

const allMarks = marks.flat(2);
console.log(allMarks);

const all_Marks = marks.flat(Infinity);
console.log(all_Marks);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// hey