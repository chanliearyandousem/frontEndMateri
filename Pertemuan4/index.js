//Function
// function greetings(){
//     return "Hello";
// }

// console.log(greetings());

//------------------------------------------------------------------

// const age = 17;

// const greetings = function (fullName) {
//     console.log(age);
//     const job = "teacher";
//     if (job === "teacher") {
//         const address = "manado";
//         console.log(address); 
//     }
//     return "Hello";
// };

// console.log(greetings("John"));

// //-----------------------------------------------------------
// //IIFE (immediately invoked function Expression)
// //Anonymous Function

// (
//     function ( ){
//         console.log("Hello IIFE")
//     }
// )();

// ---------------------------------------------------------

function createGreetings(name, callback){
    const greetings = "Hello " + name;
    callback(greetings);
}

function logGreetings(greetings){
    console.log(greetings);
}

createGreetings("John", function (greetings){
    console.log(greetings);
});


// function logGreetings(greetings){
//     console.log(greetings);
// }

// createGreetings("John", logGreetings);


//---------------------------------------------------------

