let inputResult = document.getElementById('inputtext');
const equalsButton = document.querySelector('data-equals')
    // const bracketButton = document.querySelector('data-brackets');
    // bracketButton.addEventListener

let calculate = (number) => {
    inputResult.value = inputResult.value + number;
}

let result = () => {
    inputResult.value = eval(inputResult.value)
}

function clr() {
    inputResult.value = "";
}

function del() {
    inputResult.value = inputResult.value.slice(0, -1);
}