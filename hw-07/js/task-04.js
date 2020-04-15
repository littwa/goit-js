// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
function increment() {
 counterValue += 1;
 value.textContent = counterValue;
}
function decrement() {
 counterValue -= 1;
 value.textContent = counterValue;
}

let buttonActionIncrement = document.querySelector('button[data-action="increment"]');
let buttonActiondecrement = document.querySelector('button[data-action="decrement"]');
let value = document.querySelector("span#value");

buttonActionIncrement.addEventListener("click", increment);
buttonActiondecrement.addEventListener("click", decrement);
