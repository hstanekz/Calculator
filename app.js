let num1 = null;
let num2; null;


let plus = document.querySelector(".add");
let minus = document.querySelector(".subtract");
let cross = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let clear = document.querySelector(".clear");
let equals = document.querySelector(".equal");

let display = document.querySelector(".display");


function add(num1, num2) {
    display.textContent = num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
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
            divide(num1, num2);
            break;
    }

}

for (let i = 0; i < 10; ++i) {
    let numBtn = document.getElementById(`num${i}`);
    numBtn.addEventListener('click', () => {
        if (num1 == null) {
            num1 = display.textContent += i;
        }
        else if (num2 == null) {
            num2 = display.textContent +=i;
        }
    })
}


clear.addEventListener('click', () => {
    display.textContent = 0;})
plus.addEventListener('click', () => {
    operator = "+";
})

equals.addEventListener('click', () => {
    if (num1 != null && num2 != null & operator != null) 
    operate(operator, num1, num2)})