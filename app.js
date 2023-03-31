let num1 = null;
let num2 = null;
let operator = null;
let result = null;


let plus = document.querySelector(".add");
let minus = document.querySelector(".subtract");
let cross = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let allClear = document.querySelector(".all-clear");
let equals = document.querySelector(".equals");
let cancel = document.querySelector(".cancel");
let decimal = document.querySelector(".decimal");

let display = document.querySelector(".display");

//mathematical functions
function add(num1, num2) {
    result = num1 + num2;
    display.textContent = result;
}

function subtract(num1, num2) {
    result = num1 - num2;
    display.textContent = result;
}

function multiply(num1, num2) {
    result = num1 * num2;
    display.textContent = result;
}

function division(num1, num2) {
    if (num2 == 0) {
        result = "NaN";
}
    else {result = num1 / num2;}
    display.textContent = result; 
}


function operate(operator, num1, num2) {
    switch(operator){
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            division(num1, num2);
            break;
    }

}

//button selectors
for (let i = 0; i < 10; ++i) {
    let numBtn = document.getElementById(`num${i}`);
    numBtn.addEventListener('click', () => {
        display.textContent += i;
        if (operator === null) { 
            if (num1 === null) {
                num1 = Number(display.textContent);
            } else {
                num1 = Number(num1.toString() + i.toString()); //concatenate strings then revert to integers
            }
        } else { //operator has been assigned
            if (num2 === null) {
                num2 = Number(display.textContent);
            } else {
                num2 = Number(num2.toString() + i.toString());
            }
        }
    });
}


allClear.addEventListener('click', () => {
    display.textContent = "";
    num1 = null;
    num2 = null;
    operator = null;
    })
plus.addEventListener('click', () => {
    display.textContent = ""
    operator = "+";
})
minus.addEventListener('click', () => {
    display.textContent = ""
    operator = "-";

})
cross.addEventListener('click', () => {
    display.textContent = ""
    operator = "*";

})
divide.addEventListener('click', () => {
    display.textContent = ""
    operator = "/";

})
cancel.addEventListener('click', () => {
    if (operator == null) {
    display.textContent = display.textContent.slice(0,-1);
    num1 = display.textContent; }
    else {
        display.textContent = display.textContent.slice(0,-1);
    num2 = display.textContent;
    }
})
decimal.addEventListener('click', () => {
    if (operator == null && !num1.toString().includes(".")) {
        display.textContent += '.';
        num1 = Number(num1.toString() + '.');
    }
    else if (operator != null && !num2.toString().includes(".")) {
        display.textContent += '.';
        num2 = Number(num2.toString() + '.');
    }})

equals.addEventListener('click', () => {
    if (num1 != null && num2 != null && operator != null) {
        console.log(Number(num1)) 
        console.log(Number(num2))
    operate(operator, num1, num2);
    num1 = result;
    num2 = null;
    operator = null;

}});
