const num1 = 400;
const num2 = 500;

let largest : number ;

// if(num1>num2){
//     largest=num1
// }else{
//     largest=num2
// }

//using ternary
largest = (num1 > num2) ? num1 : num2

console.log(`Largest number = ${largest}`)


//1. in terminal write tsc .\filename
//2. then js file is created then run that js file using node filename