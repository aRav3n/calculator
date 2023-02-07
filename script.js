function add(firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    answer = firstNumber + secondNumber;
    return answer;
};

function subtract(firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    answer = firstNumber - secondNumber;
    return answer;
};

function multiply(firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    answer = firstNumber * secondNumber;
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

function operate(operator, firstNumber, secondNumber) {
    let answer;

}