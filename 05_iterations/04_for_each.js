const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName);
} )


let arr=[1,2,3,4,56,6];
// let sumtwo = arr.forEach((iteam)=> (iteam+2))

// console.log(sumtwo);  // this well print undefine which means it does not return new array

// arr.forEach((iteam)=> (console.log(iteam+2)));



const data= new Map()
data.set('name',"Aashish")
data.set('Age', 18)
data.set('Country', "India")

// data.forEach((value,key,arr)=> console.log(`value :- ${value}, Key :- ${key}, array :- ${arr}`)
// )