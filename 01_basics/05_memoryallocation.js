/*stack memory(primitive){isme copied me change hota hai or original waise hi rahta hai} , 
heap memory(non-primitive){isme original me change hota hai} */

let myYoutubeName = "aashishdotcom";

let anotherName = myYoutubeName;
console.log(anotherName);

anotherName = "newAashishdotcom";
console.log(anotherName);
console.log(myYoutubeName);

//+++++++++++
let userOne = {
    email: "userone@gmail.com", 
    upi:"userone"
}

let userTwo = userOne;

userTwo.email = "asdf@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);