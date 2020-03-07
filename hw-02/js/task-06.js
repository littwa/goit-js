let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число!");
  if (input === null) {
    break;
  } else if (Number.isNaN(Number(input))) {
    alert("Это не число!!!");
    continue;
  } else {
    numbers.push(Number(input));
  }
} while (input !== null);
for (const number of numbers) {
  total += number;
}
alert(`Общая сумма чисел равна ${total}`);
