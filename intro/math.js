const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;
// now we have not exported the function in any way so ---->
module.exports = {add, subtract, multiply, divide}