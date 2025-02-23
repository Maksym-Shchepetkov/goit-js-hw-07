const textInput = document.querySelector('#name-input');

const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const trimmedValue = textInput.value.trim();
  textOutput.textContent = event.currentTarget.value;
  textOutput.textContent = trimmedValue.length > 0 ? trimmedValue : 'Anonymous';
});
