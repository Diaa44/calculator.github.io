const output = document.getElementById('output');

function display(value) {
    output.value += value;
}

function AC() {
    output.value = '';
}

function calculate() {
    try {
        output.value = eval(output.value);
    } catch (error) {
        output.value = 'Error';
    }
}

window.display = display;
window.AC = AC;
window.calculate = calculate;