/*  for-loop */

/** break and continue*/


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
   console.log(`Value of i is ${index}`);
    
}


/* While-loop */

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11



/* do-while */

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 9);