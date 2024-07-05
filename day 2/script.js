document.addEventListener('DOMContentLoaded', (event) => {
    const one = document.getElementById('1');
    const two = document.getElementById('2');
    const three = document.getElementById('3');
    const four = document.getElementById('4');
    const five = document.getElementById('5');
    const six = document.getElementById('6');
    const seven = document.getElementById('7');
    const eight = document.getElementById('8');
    const nine = document.getElementById('9');
    const zero = document.getElementById('0');
    const add = document.getElementById('+');
    const sub = document.getElementById('-');
    const multi = document.getElementById('x');
    const div = document.getElementById('/');
    const equal = document.getElementById('=');
    const clr = document.querySelector('button[value="c"]');
    const dot = document.getElementById('.');

    const userInput = document.querySelector('.user-input');

    // Function to handle button clicks
    function handleButtonClick(event) {
        const value = event.target.value;
        userInput.value += value;
    }

    // Function to handle the clear button
    function handleClear() {
        userInput.value = '';
    }

    // Function to handle the equal button
    function handleEqual() {
        try {
            userInput.value = eval(userInput.value);
        } catch (error) {
            userInput.value = 'Error';
        }
    }

    one.onclick = handleButtonClick;
    two.onclick = handleButtonClick;
    three.onclick = handleButtonClick;
    four.onclick = handleButtonClick;
    five.onclick = handleButtonClick;
    six.onclick = handleButtonClick;
    seven.onclick = handleButtonClick;
    eight.onclick = handleButtonClick;
    nine.onclick = handleButtonClick;
    zero.onclick = handleButtonClick;
    add.onclick = handleButtonClick;
    sub.onclick = handleButtonClick;
    multi.onclick = handleButtonClick;
    div.onclick = handleButtonClick;
    dot.onclick = handleButtonClick;

    clr.onclick = handleClear;
    equal.onclick = handleEqual;
});
