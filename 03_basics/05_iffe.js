// Immediately Invoked Function Expression (IFFE)

function chai(){
    console.log(`Data base connected`);
}
chai(); // this can also be done for immediately invoked but it may get polluted from global variables so we use IFFE



// Named IFFE

(function loggedIn(){
    console.log(`User log in successful`)
}) ();  // usually ";" nhi lagane se IFFE me dikkat aa jati hai kyuki code execution kaha rokna hai wo usko nhi pta chalta to ";" laga de
  // this if IFFE ()() one for deceleration and one for calling


(
    ()=>{
        console.log("Hello everyone")
    }
)  ();
// IFFE with Arrow function


// Parametarized IFFE
(
    (name)=>{
        console.log(`Hello ${name}`)
    }
)  ("Aashish");



