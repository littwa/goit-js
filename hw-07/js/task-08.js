// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

let inputNumber = document.querySelector('input[type="number"]');
let btnRender = document.querySelector('[data-action="render"]');
let btnDestroy = document.querySelector('[data-action="destroy"]');
let divBoxes = document.querySelector("#boxes");

btnRender.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", clearBoxes);

function createBoxes(e, amount = inputNumber.value) {
 let massDiv = [];
 for (let i = 0; i < amount; i += 1) {
  let divOne = document.createElement("div");
  divOne.style.width = `${20 + 10 * (i + 1)}px`;
  divOne.style.height = `${20 + 10 * (i + 1)}px`;
  divOne.style.backgroundColor = `rgb(${(Math.random() * 255).toFixed()}, ${(
   Math.random() * 255
  ).toFixed()}, ${(Math.random() * 255).toFixed()})`;
  massDiv.push(divOne);
 }
 divBoxes.append(...massDiv);
}

function clearBoxes() {
 divBoxes.innerHTML = "";
}
