//array

const myNum = [5,5,9,5,3,7,1];
// console.log(myNum[2]);

myNum.push(8);
// console.log(myNum);
myNum.pop();
// console.log(myNum);
myNum.unshift(6); 
// isi trah shift bhee hota hai jo array ke first element ko remove kr deta hai , ye value add krne ka shi trika nhi hai kyu ki isse load bdhta hai jo ki shi code optimisation nhi hai //

// console.log(myNum);

// console.log(myNum.includes(10));
// console.log(myNum.includes(9));
// console.log(myNum.indexOf(5));

const newMyNum = myNum.join(); // this join() bind it and changes it into the string

// console.log(myNum);
// console.log(newMyNum);
// console.log(typeof(newMyNum));

// slice , splice

console.log("A",myNum);

const myNum1 = myNum.slice(0,4);
console.log("B",myNum1);

console.log("A",myNum);

const myNum2 = myNum.splice(1,4);
console.log("C",myNum2);

console.log("A",myNum);

const myNum3 = myNum.splice(0,3);
console.log("D",myNum3);

console.log("A",myNum);

const myNum4 = myNum.slice(0,3);
console.log("E",myNum3);

console.log("A", myNum);

//  slice or splice me difference puch ke interviewer ye check krega ki tum bas range wale concept ko jante ho ya manipulation wale concept ko bhee jante ho 

/*In JavaScript, slice() and splice() are two array methods, but they behave differently:

slice(): This method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array is not modified.  
splice(): This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

So, to summarize:

slice() operates on the original array but returns a new array (a shallow copy).
splice() operates directly on the original array and modifies it.
*/
