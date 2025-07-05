const inputField = document.getElementById('input-field');
const outputField = document.getElementById('output-field');

const uppercaseBtn = document.querySelector('.uppercase');
const lowercaseBtn = document.querySelector('.lowercase');
const capitalizeBtn = document.querySelector('.capitalize');
const boldBtn = document.querySelector('.bold');
const italicBtn = document.querySelector('.italic');
const underlineBtn = document.querySelector('.underline');

function updateOutput(transformFunc) {
  let text = inputField.value;
  outputField.innerHTML = transformFunc(text);
}

uppercaseBtn.addEventListener('click', () => {
  updateOutput(text => text.toUpperCase());
});

lowercaseBtn.addEventListener('click', () => {
  updateOutput(text => text.toLowerCase());
});

capitalizeBtn.addEventListener('click', () => {
  updateOutput(text => 
    text
      .toLowerCase()
      .replace(/\b\w/g, char => char.toUpperCase())
  );
});

boldBtn.addEventListener('click', () => {
  updateOutput(text => `<b>${text}</b>`);
});

italicBtn.addEventListener('click', () => {
  updateOutput(text => `<i>${text}</i>`);
});

underlineBtn.addEventListener('click', () => {
  updateOutput(text => `<u>${text}</u>`);
});
