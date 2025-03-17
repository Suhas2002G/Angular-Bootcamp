//js syntax for function
// function add(a1,b1){
//     return a1+b1
// }
// add()
// add(10,'hi')
// add(100,'hi',34)
// In all these cases, js works and function executed
//TS function
function additiion(num1, num2) {
    return num1 + num2;
}
// here we have to define type 
//Arrow function [imp]
// function sq(num:number) : number{
//     return num**2
// }
//equvelent arrow function is 
var sq = function (num) { return Math.pow(num, 2); };
console.log(sq(10)); //100
