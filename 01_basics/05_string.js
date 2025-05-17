// for checking the all functions in string in console {const name = new string ('Aashish')} just run this


const name = "Aashish"
const repocount = 50

console.log (name + repocount +"value"); // this is not good way to write string

console.log (`Hello my name is ${name} and my repo count is ${repocount}`); // this is good practice (this is string interpolation )


const gameName = new String('hitesh-hc-com') //By this method we can also declare variables 

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));






   // *********  Importent 

   let fname="Aashish";
   let lname=new String("Kumar")

   let fname2=fname;
   fname2="Parshuram";

   let lname2=lname;
   lname2="Singh"
   

   console.log(fname)
   console.log(fname2)
   console.log(lname)
   console.log(lname2)

/*  
    Need to keep in mind that the how stack & heap memory work, Data type aapna characteristic nhi bdlega string h to string jysa hi behave krega {Caahe wo string object hi kyu n ban jay }

    In JavaScript, even when a string is wrapped inside a String object stored on the heap, the actual string value remains immutable. This means the sequence of characters cannot be changed once created. When you call methods like .toUpperCase(), they do not modify the original string inside the object; instead, they return a new string with the applied changes. The String object itself is mutable (you can add properties to it), but its internal string value is fixed. This design ensures strings behave consistently and efficiently in memory, whether they are primitive values stored on the stack or wrapped in objects on the heap.
*/