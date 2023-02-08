let clearAllButton = document.querySelector('#clear');
let decimalButton = document.querySelector('.decimalButton');
let displayText = document.querySelector('#displayText');
let mathArray = [];
let mathString = '';
let numberButtons = document.querySelectorAll('.numberButton');
let operatorButtons = document.querySelectorAll('.operatorButton')

clearAllButton.addEventListener('click', () => {
    mathString = '';
    mathArray = [];
    displayText.textContent = '1 + 1';
    operatorButtons.forEach(operatorButton => {
        operatorButton.classList.add('inactiveButton');
    });
});

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        if(!numberButton.classList.contains('inactiveButton')) {
            mathString += numberButton.textContent;
            displayText.textContent = mathString;
            if(numberButton.classList.contains('decimalButton')) {
                numberButton.classList.add('inactiveButton');
            };
            operatorButtons.forEach(operatorButton => {
                operatorButton.classList.remove('inactiveButton');
            });
        };
    });
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        if(!operatorButton.classList.contains('inactiveButton')) {
            decimalButton.classList.remove('inactiveButton');
            if(operatorButton.classList.contains('multiply')) {
                mathString += ' * ';
                operatorButtons.forEach(operatorButton => {
                    operatorButton.classList.add('inactiveButton');
                });
            } else if(operatorButton.classList.contains('divide')) {
                mathString += ' / ';
                operatorButtons.forEach(operatorButton => {
                    operatorButton.classList.add('inactiveButton');
                });
            } else if(operatorButton.classList.contains('add')) {
                mathString += ' + ';
                operatorButtons.forEach(operatorButton => {
                    operatorButton.classList.add('inactiveButton');
                });
            } else if(operatorButton.classList.contains('subtract')) {
                mathString += ' - '
                operatorButtons.forEach(operatorButton => {
                    operatorButton.classList.add('inactiveButton');
                });
            } else if(operatorButton.classList.contains('equals')) {
                mathArray = mathString.split(' ');
                doMathForTheseOperators('*', '/');
                doMathForTheseOperators('+', '-');
                if(mathArray.length === 1){
                    mathString = mathArray[0];
                    let tempMathString = Math.round(mathString * 100) / 100;
                    mathString = tempMathString;
                } else {
                    mathString = 'Something went wrong';
                }
            };
            displayText.textContent = mathString;
        };
    });
});


function add(firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    answer = firstNumber + secondNumber;
    return answer;
};

function divide(firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    if(secondNumber === 0) {
        alert("You should know better than to divide by 0")
        return "\u221E";
    }
    answer = firstNumber / secondNumber;
    return answer;
};

function doMathForTheseOperators(firstOperator, secondOperator) {
    while(mathArray.includes(firstOperator) || mathArray.includes(secondOperator)) {
        for(let i = 0; i < mathArray.length; i++) {
            if(mathArray[i] == firstOperator || mathArray[i] == secondOperator) {
                let tempAnswer = operate(mathArray[i], mathArray[i - 1], mathArray[i + 1]);
                let tempMathArray = [];
                for(let j = 0; j < i - 1; j++) {
                    tempMathArray.push(mathArray[j]);
                };
                tempMathArray.push(tempAnswer);
                for(let j = i + 2; j < mathArray.length; j++) {
                    tempMathArray.push(mathArray[j]);
                };
                mathArray = tempMathArray;
            };
        };
    };
};

function multiply(firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    answer = firstNumber * secondNumber;
    return answer;
};

function operate(operator, firstNumber, secondNumber) {
    let answer;
    if(operator === "*") {
        answer = multiply(firstNumber, secondNumber);
    } else if(operator === "/") {
        answer = divide(firstNumber, secondNumber);
    } else if(operator === "+") {
        answer = add(firstNumber, secondNumber);
    } else if(operator === "-") {
        answer = subtract(firstNumber, secondNumber);
    } else {
        answer = operator + " isn't a valid operator. You\'d better try that again"
    };
    return answer;
};

function subtract(firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    answer = firstNumber - secondNumber;
    return answer;
};