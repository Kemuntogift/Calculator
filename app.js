class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber() {

    }

    chooseOperation() {

    }

    compute() {

    }
}



const numberButtons = document.querySelectorAll('data-number')
const operationButtons = document.querySelectorAll('data-operation')
const equalsButton = document.querySelector('data-equals')
const bracketButton = document.querySelector('data-brackets')
const deleteButton = document.querySelector('fa-delete-left')
const allClearButton = document.querySelector('data-all-clear')