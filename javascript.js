const output = document.getElementById('output');

function display(value) {
    const lastChar = output.value.slice(-1);
    const isLastCharOperator = ['+', '-', '*', '%'].includes(lastChar);

    if (isLastCharOperator && ['+', '-', '*', '%'].includes(value)) {
        output.value = output.value.slice(0, -1) + value;
    } else {
        output.value += value;
    }
}

function calculate() {
    try {
        output.value = eval(output.value);
    } catch (error) {
        output.value = 'Error';
    }
}

function AC() {
    output.value = '';
}

window.display = display;
window.AC = AC;
window.calculate = calculate;
