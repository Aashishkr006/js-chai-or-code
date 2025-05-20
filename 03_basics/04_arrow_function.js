/* Introduction to "this" (Current context) 
   Introduction to "Arrow function"
*/


// Lexical scope means surrounding scope, lexical means surrounding

// browser ka global object hai window object




const user ={
    firstName: "Aashish",
    lastName: "Kumar",

    fullname: function(){
        console.log(`Full name is ${this.firstName} ${this.lastName}`);
        console.log(this);   // ye this object name ko consider krega or pura object print krke dega, 
    }
}

// user.fullname();
// user.firstName= "Virat";
// user.lastName = "Kohli";
// user.fullname();
// console.log(user.firstName)

// console.log(this)   /* Depends on ki hum ye line kaha run ke rhe hai iska output alag aayga kyu ki agar chrome browser me run kroge to waha pe global object window object hai to waha window object khulega or kyu ki hum node environment me hai to yeha {} empty object milega  */


function chai1(){
    let username = "hitesh"
    console.log(this.username);
}

const chai2 =  () => {
    let username = "hitesh"
    console.log(this.username);
}



const chai3 = function () {
        let username = "hitesh"
        console.log(this.username);
    }
    
    // chai1()
    // chai2()
    // chai3()





function greet() {
  console.log(this.name);
}

const user1 = {
  name: "Aashish",
  "sayHey": "Hey",
  greet: greet,   // <- assigning the outside function
  arrowGreet: () => {
    console.log(this.name);  // ** In arrow function "this" 
  }
};

// user1.greet(); 
// user1.arrowGreet();
// greet();



const user2 = {
  name: "Aashish",
  greet: function () {
    const arrow = () => {
      console.log("Hi, I'm " + this.name);
    };
    arrow(); // ✅ inherits `this` from the regular function
  }
};

// user2.greet(); 





/*
    ********  Conclusion:
It’s not about where the function is defined, but how it is called.
If it’s called through an object (obj.func()), this refers to obj.
If it’s called standalone (func()), this is global or undefined.


    ****** Summary (Interviewer-Friendly):
You can confidently say:

"this in regular functions is dynamic — it depends on the call-site. 
If a function is called as a method of an object, this refers to that object. 
If called standalone, this refers to the global object (or undefined in strict mode). 
So it's not about where the function is declared, but how it is invoked."

Regular functions define their own this, depending on how they're called.

Arrow functions do not have their own this. They inherit this from their lexical (surrounding) scope.

*/





const addTwo = (num1,num2) => {return num1+num2}


const subTwo = (num1,num2) => (num1-num2)

const multiplyTwo = (num1,num2) => num1*num2;

// console.log(addTwo(1,2));
// console.log(subTwo(3,2));
// console.log(multiplyTwo(1,2));



const name = (name) => ({userName: "Aashish"})

const fname = (name) => ({userName: name})

// console.log(name)
// console.log(name())
// console.log(name().userName)
// console.log(name("Virat Kohli"))
// console.log(name("Virat Kohli").userName)
// console.log(name("Virat Kohli").userName="ABD")

// console.log(fname("Virat Kohli"))
// console.log(fname("Virat Kohli").userName)



/* ***  Final Advice:
   Use function when you need your own this, especially in object methods, constructors, or class methods.

   Use arrow when you want a cleaner syntax and don't want to worry about this.

*/
