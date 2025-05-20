// singleton
// const tinderUser = new Object();




const tinderUser ={};

tinderUser.id = "123abc"
tinderUser.name = "Aashish"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullName:{
        userFullName: {
            firstName: "Aashish",
            lastName:"kumar"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);


/*
    some prototype methodes
*/

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d", 5:{
    fname:"Aasish",
    lname: "Kumar"
}}


const obj3 = {obj1, obj2} //it will give you two objects
// console.log(obj3);

const obj4 = {...obj1, ...obj2}  // it helps in copy but it is shallow copy
// console.log(obj4)
obj4[5].fname="aashish";
// console.log(obj4)




/*
    Behind the Scenes
...iterable returns:
For arrays/strings: individual elements

For objects: individual key-value pairs

For sets: unique values (as elements)

Note:
The spread operator does not mutate the original object or array.

It creates a shallow copy of the iterable. 
 */



/* 
      
    ++++++++++  Shallow copy and Deep copy
 */

    
const original = {
  name: "Aashish",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

const copy = { ...original };
// copy.address.city = "Mumbai";
// copy.name="aashish"
// console.log(original.address.city); // Mumbai
// console.log(copy.address.city); // Mumbai
// console.log(original.name);  // Aashish
// console.log(copy.name);  // "aashish"

// above thing shows what is shallow coppy and expexted deep copy

/* Shallow copy aslo can de done by ".assign()" */


const copy0 = Object.assign({}, original);

// copy0.address.city = "Patna";
// console.log(original.address.city);    //Patna
// console.log(copy0.address.city);       //Patna


// now how to nake deep copy


/* 1 => JSON METHOD  */

const copy1 =JSON.stringify(original);
const copy2= JSON.parse(copy1)

// const copy1 = JSON.parse(JSON.stringify(Original))

copy2.address.city = "Munbai";

// console.log(original.address.city)  //Delhi
// console.log(copy2.address.city)    //Mumbai

/* 2 => structuredClone method  (Available in modern browser/node17+) */

const copy3 = structuredClone(original);

copy3.address.city ="Banglore";

// console.log(original.address.city);   // Delhi
// console.log(copy3.address.city);      // Banglore




/*     Object inside an Array   */

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // you can access it by this, you understand that why I use users[1] =>{Because users is an array and inside array there are objects}



/*  Object me directly methods bhee store kr sakte h without giving key */

// const calculator ={
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     }
// }

// console.log(calculator.add(2,3))