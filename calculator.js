const add = function (num1,num2) {
    return num1 + num2
}

const subtract = function(num1,num2) {
    return num1 - num2
}

const multiply = function (num1, num2) {
    return num1 * num2
}

const divide = function(num1,num2) {
    return num1 / num2
}

let var1
let oper
let var2
let expr = [] // The whole mathematical expression: (number), (operation), (number)

const operate = function(op,var1,var2) {
    if (op == 'add') {
        return add(var1,var2)
    } else if (op == 'subtract') {
        return subtract(var1,var2)
    } else if (op == 'multiply') {
        return multiply(var1,var2)
    } else if (op == 'divide') {
        return divide(var1,var2)
    }
}

const display = document.querySelector('.display')
const digit = document.querySelector('.digit');
digit.addEventListener('click', () => {
    expr.push(digit);
    display.textContent = `${expr.toString()}`;
});