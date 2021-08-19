'use strict';

const addParagraph = function () {
  const input = document.querySelector(`input`);
  if (input.value.trim().length > 0 && input.type === `text`) {
    const li = document.createElement(`li`);
    li.innerText = input.value.trim();
    document.querySelector(`ul`).appendChild(li);
    input.value = ` `;
  }
};


const button = document.querySelector(`button`);
button.addEventListener('click', addParagraph);
