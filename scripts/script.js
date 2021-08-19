'use strict';

//Задание №10

//1. Восстановить порядок книг:

const bookCollection = document.querySelector(`.books`),
  book = document.querySelectorAll(`.book`);
bookCollection.prepend(book[1]); //Восстановлен порядок книги 1.
bookCollection.append(book[2]); //Восстановлен порядок книги 4.
book[3].before(book[4]); //Воостановлен порядок книг 3.

//2. Заменить картинку заднего фона на другую из папки image:

const bodyPicture = document.querySelector(`body`);
bodyPicture.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

//3. Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов"):

const headerText = document.querySelectorAll(`a`);
headerText[2].innerHTML = `Книга 3. this и Прототипы Объектов`;

//4. Удалить рекламу со страницы:

const advertising = document.querySelector(`.adv`);
advertising.remove();

//5.Восстановить порядок глав во второй и пятой книге:
//Книга 2.

const orderFirst = book[0].querySelectorAll(`li`);
orderFirst[2].append();
orderFirst[4].before(orderFirst[6]);
orderFirst[6].appendChild(orderFirst[8]);

//Книга 5.

const orderSecond = book[5].querySelectorAll(`li`);

orderSecond[1].appendChild(orderSecond[9]);
orderSecond[1].appendChild(orderSecond[3]);
orderSecond[7].appendChild(orderSecond[5]);
orderSecond[2].before(orderSecond[4]);

//6. В шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место:

const newChapter = book[2].querySelector(`ul`);
const newText = document.createElement(`li`);
const content = book[2].querySelectorAll(`li`);
newText.textContent = `Глава 8: За пределами ES6`;
newChapter.append(newText);
newChapter.append(content[9]);

console.log(`Имеющиеся книги: `, book);
