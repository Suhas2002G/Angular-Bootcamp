//js syntax for function
// function add(a1,b1){
//     return a1+b1
// }

// add()
// add(10,'hi')
// add(100,'hi',34)
// In all these cases, js works and function executed



//TS function
function additiion(num1:number, num2:number) : number{
    return num1 + num2;
}
// here we have to define type 





//Arrow function [imp]

// function sq(num:number) : number{
//     return num**2
// }
//equvelent arrow function is 
const sq = (num : number):number => num**2
console.log(sq(10))  //100

// PS E:\AngularBootcamp> tsc .\function.ts 
// PS E:\AngularBootcamp> node .\function.js
// 100