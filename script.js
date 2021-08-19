'use strict';

const addParagraph = function () {
  const input = document.querySelector(`input`);
  if (input.value.trim().length > 0) {
    const li = document.createElement(`li`);
    li.innerText = input.value.trim();
    document.querySelector(`ul`).appendChild(li);
  }

};

const button = document.querySelector(`button`);
button.addEventListener('click', addParagraph);