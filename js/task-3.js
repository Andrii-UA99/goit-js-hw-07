const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
    const inputValues = event.target.value.trim();
    if (inputValues) {
        outputName.textContent = inputValues;
    } else {
        outputName.textContent = 'Anonymous';
    }
});