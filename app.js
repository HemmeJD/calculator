const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const keys = calculator.querySelector('.calc-keys');

const firstValue = '';
const operator = '';
const secondValue = '';

const add = (num1, num2) => {
    let result = num1 + num2;
    return result;
}

const subtract = (num1, num2) => {
    let result = num1 - num2;
    return result;
}

const multiply = (num1, num2) => {
    let result = num1 * num2;
    return result;
}

const divide = (num1, num2) => {
    let result = num1 / num2;
    return result;
}

const operate = (firstValue, operator, secondValue) => {
    let result = '';

    if (operator === 'add') {
        result = add(firstValue, secondValue);
    } else if (operator === 'subtract') {
        result = subtract(firstValue, secondValue);
    } else if (operator === 'multiply') {
        result = multiply(firstValue, secondValue);
    } else if (operator === 'divide') {
        result = divide(firstValue, secondValue);
    }

    return result;
}

console.log(operate(9, 'add', 10));

// keys.addEventListener('click', e => {
//     if (e.target.matches('button')) {
//         const key = e.target;
//         const action = key.dataset.action;
//         const keyContent = key.textContent;
//         const displayedNum = display.textContent;
//         const previousKeyType = calculator.dataset.previousKeyType;

//         if (!action) {
//             if (displayedNum === '0' || previousKeyType === 'operator') {
//                 display.textContent = keyContent;
//             } else {
//                 display.textContent = displayedNum + keyContent;
//             };
//             calculator.dataset.previousKeyType = 'number';
//         }

//         if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
//             const firstValue = calculator.dataset.firstValue;
//             const operator = calculator.dataset.operator;
//             const secondValue = displayedNum;

//             if (firstValue && operator && previousKeyType !== 'operator') {
//                 const calcValue = operate(firstValue, operator, secondValue);
//                 display.textContent = calcValue;

//                 // Update calculated value as firstValue
//                 calculator.dataset.firstValue = calcValue;
//             } else {
//                 // If there are no calculations, set displayeNum as the firstValue
//                 calculator.dataset.firstValue = displayedNum;
//             }

//             key.classList.add('is-pressed');
//             calculator.dataset.previousKeyType = 'operator';
//             calculator.dataset.operator = action;
//         }

//         if (action === 'decimal') {
//             if (!displayedNum.includes('.')) {
//                 display.textContent = displayedNum + '.';
//             } else if (previousKeyType === 'operator') {
//                 display.textContent = '0.';
//             }

//             calculator.dataset.previousKeyType = 'decimal';
//         }

//         if (action === 'clear') {
//             display.textContent = '0'
//             calculator.dataset.previousKeyType = 'clear';
//         }

//         if (action === 'calculate') {
//             const secondValue = displayedNum;
//             const operator = calculator.dataset.operator;
//             const firstValue = calculator.dataset.firstValue;

//             display.textContent = operate(firstValue, operator, secondValue);
//             calculator.dataset.previousKeyType = 'calculate';
//         }

//         Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'))
//     }
// })