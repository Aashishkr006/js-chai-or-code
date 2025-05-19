/* 
    ***  Rest parameter and spread operator 
    both are seems same (...) but work differently
*/



// function calculateCartPrice_1(...num1){
//      return num1;
// }
// console.log(calculateCartPrice_1(234,4567,7898,997));


// function calculateCartPrice_2(num1, num2 , ...num3){
//      return num3;
// }
// console.log(calculateCartPrice_2(234,4567,7898,997));



// const user = {
//     username: "Aashish",
//     price: 199
// }


function handleObject(anyobject){
    console.log(`User is ${anyobject.username } and price is ${anyobject.price}`);
}

// handleObject(user);


// handleObject({
//     username: "sam",
//     price: 399
// }

 /* You can declare the object seperately or during the time of function calling as well  */
// /*  Here we have to be sure about the key or the variable name and type */


/* 
     You can do same for the array as well
*/
