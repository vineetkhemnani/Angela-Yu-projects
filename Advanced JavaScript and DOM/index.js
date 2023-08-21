// Higher order functions and passing functions as parameters
// Higher order functions are those functions that can take other functions as parameters/inputs
function add(num1,num2){
    return num1+num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
    

function calculator(num1,num2, operator){
    return operator(num1,num2);
}

console.log(calculator(4,5,multiply));