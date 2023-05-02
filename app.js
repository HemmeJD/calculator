const calculator = document.querySelector('.calculator');
const equation = calculator.querySelector('.equation');
const display = calculator.querySelector('.display');
const keys = calculator.querySelector('.calc-keys');

keys.addEventListener('click', event => {
    
    if (!event.target.closest('button')) return;

    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const { type } = key.dataset;
    const { previousKeyType } = calculator.dataset;


    if (type == 'number') {
        if (displayValue == '0') {
            display.textContent = keyValue; 
        } else if(previousKeyType == 'operator') {
            display.textContent = keyValue;
        } else {
            display.textContent = displayValue + keyValue;
        }
    }

    if (type == 'operator') {
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
        operatorKeys.forEach(key => { 
            key.dataset.state = ''
        });
        key.dataset.state = 'selected';

        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = key.dataset.key;
    }

    if (type == 'equal') {
        //Perform a calculation
        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operator;
        const secondNumber = displayValue;
        display.textContent = operate(firstNumber, operator, secondNumber);
    }

    if (type == 'clear') {
        display.textContent = 0;
        equation.textContent = '';
    }

    calculator.dataset.previousKeyType = type;
})

function operate (firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    let result = '';
    if (operator == 'plus') {
        result = firstNumber + secondNumber;
        equation.textContent = `${firstNumber} + ${secondNumber}`;
    }

    if (operator == 'minus') {
        result = firstNumber - secondNumber;
        equation.textContent = `${firstNumber} - ${secondNumber}`;
    }

    if (operator == 'times') {
        result = firstNumber * secondNumber;
        equation.textContent = `${firstNumber} x ${secondNumber}`;
    }

    if (operator == 'divide') {
        result = firstNumber / secondNumber;
        equation.textContent = `${firstNumber} / ${secondNumber}`;
    }

    return result;
}