// //ARRAY//
// //1//
// let people = ["Greg", "Mary", "Devon", "James"];
// for(let i=0; i<people.length; i++){
//     console.log(people[i]);
// }  

// //2//
// people.forEach(function(Value){
//     console.log(Value);
// });

// //3//
// people.splice(0,1);
// console.log(people);

// //4//
// people.pop();
// console.log(people);

// //5//
// people.unshift("Matt");
// console.log(people);

// //6//
// people.push("Chanlie");
// console.log(people);

// //7//
// for(let name = 0; name< people.length; name++) {
//     console.log(people[name]);
//     if(people[name]== 'Mary') {
//         break;
//     }
// }

// //8//

// let peopleName = people.slice(2);
// console.log(peopleName);

// //9//
// people.splice(2,1,"Elizabeth", "Artie");
// console.log(people);

// //10//
// let withBob = people.concat("Bob");
// console.log(withBob);


// //OBJECT EXERCISES//
// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };


// //1//
// programming.languages.push("Go")
// console.log(programming);

// //2//
// programming['difficulty']= 7;
// console.log(programming);

// //3//
// delete programming.jokes;
// console.log(programming);

// //4//
// programming.isFun = true;
// console.log(programming);

// //5//
// programming.languages.map(function(value, index){
//     console.log(index + '-' + value) ;
// })