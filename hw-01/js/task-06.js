let input;
let total = 0;

do {
  input = prompt("Введите число!");
  if (Number.isNaN(Number(input))) {
    alert("Это НЕ число!");
  }
  if (Number.isNaN(Number(input))) {
    continue;
  }
  total += Number(input);
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
