console.log('This is calculator');

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (button of buttons) {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = ''
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}