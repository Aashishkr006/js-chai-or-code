/** For...0f */


let arr =[1,2,3,4,5]

for(const index of arr){
    // console.log(i);    // it will print all the values
}


let name = "Aashish";
for(const char of name){
    // console.log(char);    // it will print all the char of "name"
}



/* **** Map  **** */


const data= new Map()
data.set('name',"Aashish")
data.set('Age', 18)
data.set('Country', "India")

// console.log(data);


for(const key of data){
    // console.log(key);   // give multiple array of have key and their value
}

for(const [key,value] of data){
    console.log(`key is ${key} and the value is ${value}`);
}

const user= {
    isLoggedIn:true,
    haveEmai: false
}

// for(const [key, value] of user){
//     // console.log(key,value)   // giving that the "User is not iterable"
// }


/*   
   Can't use for...of for iterating Object
   but can use some method or chaining to do so 
*/

for(let key of Object.keys(user)){
    console.log(key, user[key])
}