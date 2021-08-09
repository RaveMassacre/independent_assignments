'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

//Задание №6:

const starting = function () {
  let randomNumber = 13;
  const gameBot = function () {
    const number = prompt(`Угадай число от 1 до 100. Для выхода из игры нажмите "Отмена"`);
    if (number === null) {
      alert(`До новых встреч!`);
      return;
    }
    if (isNumber(number)) {
      const trueNumber = +number;
      if (trueNumber > randomNumber) {
        alert(`Увы! Заданное Вами число оказалось больше`);
        gameBot();
      } else if (trueNumber < randomNumber) {
        alert(`Увы! Заданное Вами число оказалось меньше`);
      } else {
        if (confirm(`В точку! Будем играть ещё?`)) {
          starting();
        } else {
          alert(`До новых встреч!`);
          return;
        }
      }
    } else {
      alert(`Вам нужно ввести число!`);
      gameBot();
    }
  };
  gameBot();
};
starting();