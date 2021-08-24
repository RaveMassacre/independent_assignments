'use strict';

const todoControl = document.querySelector(`.todo-control`),
  headerInput = document.querySelector(`.header-input`),
  todoList = document.querySelector(`.todo-list`),
  todoCompleted = document.querySelector(`.todo-completed`),
  headerButton = document.querySelector(`.header-button`),
  todoRemove = document.querySelector(`.todo-remove`),
  todoData = [];

const LoadStorage = function () {
  const lStr = localStorage.getItem(`todoList`);
  if (lStr !== null) {
    const writeStr = JSON.parse(lStr);
    writeStr.forEach(function (item) {
      todoData.push(item);
    });
  }
};
const saveLocalStorage = function () {
  const json = JSON.stringify(todoData);
  localStorage.setItem('todoList', json);
};


const render = function () {

  todoList.textContent = ``;
  todoCompleted.textContent = ``;

  todoData.forEach(function (item, i) {
    const li = document.createElement(`li`);
    li.classList.add(`todo-item`);
    li.innerHTML = `<span class="text-todo">` + item.value + `</span>` +
      `<div class="todo-buttons">` +
      `<button class="todo-remove"></button>` +
      `<button class="todo-complete"></button>` +
      `</div>`;
    if (item.completed) {
      todoCompleted.append(li);

    } else {
      todoList.append(li);
    }
    const BtnTodoCompleted = li.querySelector(`.todo-complete`);
    BtnTodoCompleted.addEventListener(`click`, function () {
      item.completed = !item.completed;
      render();
      saveLocalStorage();
    });
    const todoDeleted = li.querySelector(`.todo-remove`);
    todoDeleted.addEventListener(`click`, function () {
      li.remove();
      todoData.splice(i, 1);
      if (todoData.length !== 0) {
        saveLocalStorage();
      } else {
        localStorage.removeItem(`todoList`);
      }
    });
  });
};

todoControl.addEventListener(`submit`, function (event) {
  event.preventDefault();
  const newTodo = {
    value: headerInput.value,
    completed: false
  };
  todoData.push(newTodo);
  if (headerInput.type === `text`) { // Условие очистки инпута после добавление дела.
    headerInput.value = ``;
  }
  saveLocalStorage();
  render();
});


const bannedPlus = function () {
  headerButton.disabled = !headerInput.value.trim(); //Запрещаем добавление "пустого" дела.
};


bannedPlus();
LoadStorage();
document.addEventListener(`DOMContentLoaded`, render); // Событе автоматической подгрузки дел из storage
headerInput.addEventListener(`input`, bannedPlus);