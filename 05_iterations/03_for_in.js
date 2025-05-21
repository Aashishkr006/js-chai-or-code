/** for...in 
 * iterate on keys
 * {since for..of (values pe work krta hai is liya wo directly object ke liye use nhi kiya ja sakta kyu ki directly hum object ke values ko acccess nhi kr sakte but Object.key() ka use krke jb hum use orte hai to object ke keys ka access mjil jata hai or hum values access kr pate hai)}
 */

let arr =[3,5,7,8,2,9];

for(const key in arr){
    console.log(key);  // This will give you all index becaouse it work on key
}


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

/**It will not give any thing 
 * in future we will deep dive into Map
 */