// singleton 
// Object.create   // ye constructor ke through banta h or isi me object literals bnte h

// object literals

const mySymbol = Symbol("Symbol-1");

let jsuser = {
    name: "Aashish",                    // string key
    "full name": "Aashish kumar",      // string key with space
    location: "Bhopal",                // string key
    isAbove18: true,                   // boolean value
    lastLoginDays: ["Monday", "Saturday"], // array value
    mySymbol: "Symbol-2",              // string key named "mySymbol"
    [mySymbol]: "Symbol-3"             // Symbol key
};

let fruite = ["Mango", "Apple", "Banana"]

// console.log(jsuser.name);
// console.log(jsuser.lastLoginDays[1]);
// console.log(fruite[1]);
// console.log(jsuser["name"]);
// console.log(jsuser["full name"]);
// console.log(jsuser["mySymbol"]);
// console.log(jsuser[mySymbol]);
// console.log(mySymbol)

// console.log(typeof mySymbol);         // "symbol"
// console.log(typeof jsuser["mySymbol"]); //  "string"
// console.log(typeof jsuser[mySymbol]);   //  "string"

console.log(jsuser)


/*
    Interview things(){
     They Ask => take sybmol key and add in object key and print it
     They Ask => Different ways of accessing object
    }   

    So the best way of accesing the object is "obj[key]", you can do "obj.key" but in cases like key having space in between of the symbol it case error of problem 
    just like you have seen in Array which is also an Object, you can access it by the array[key/index], here we have more options of key unlike array have only numbers
*/

// jsuser.lname="Kumar";
// console.log(jsuser)

// jsuser.location="Patna";
// console.log(jsuser)

// Object.freeze(jsuser);       // This is to freeze the object that no further changes
// jsuser.location="Bangalore";
// console.log(jsuser)

Object.freeze(jsuser);  //Everthrough the Object "jsuser" freezed the greeting_1 function add it in the Object prototype so it doesn't matter the specific Object is freezed of not it will add in the Whole Object 
Object.prototype.greeting_1 = function(){
    return (`Hello js user `)
}

jsuser.greeting_2 = function(){
    return (`Hello js user ${this.name}`)
}

console.log(jsuser.greeting_1());
console.log(jsuser.greeting_2());
