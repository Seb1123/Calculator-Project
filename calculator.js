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

let exprBig = []        // The whole mathematical expression: (number), (operation), (number).
let exprSmall = []      // Stores the current active number/expression that is being typed into the calculator.
let num = 0
const display = document.querySelector('.display')
const digit = document.querySelectorAll('button.digit')
const btn = document.querySelectorAll('button')

btn.forEach((button) => {
    if (button.getAttribute('class') == 'digit'){
        button.addEventListener('click', () => {
            exprSmall.push(button.id);
            num = 0
            for(i = 0; i <= (exprSmall.length-1); i++) {
                num += (exprSmall[i]*(10**(exprSmall.length - 1 - i)))
            }
            display.textContent = `${num}`;
        });
    } else if (button.getAttribute('class') == 'operation') {
        button.addEventListener('click', (button) => {
        exprBig.push(num);
        if (button.getAttribute('id') == 'add') {
            op = 'add';
            alert('Hello');
        };
        num = 0;
        });
    } else if (button.getAttribute('class') == 'neutral') {
        button.addEventListener('click', () => {
            exprBig = [];
            exprSmall = [];
            num = 0;
            display.textContent = `${num}`
        });
    }
    ;
});
display.textContent = '5318008'; // Displays the default before pressing any numbers.

