/* Don't use "var"  because it is not block-scoped, it can be accessed out of the scope as well */


let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


/*   ****  "Lexical Scope" ****
    A variable defined outside a function can be acccessible inside another function edfined after the variable declaration
    => Basically nested function me socpe wala concept hai
   */

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // here you are calling the function which exist

function addone(num){
    return num + 1
}


addTwo(5)   // here you are calling the variable which is not decleared yet, so it gives error
const addTwo = function(num){
    return num + 2
}

/*  Here come the topics like "Hoisting" & "Execution context" */

