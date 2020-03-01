let credits = 23580;
const pricePerDroid = 3000;
let amount = prompt("Какое количество дроидов пользователь хочет купить?");
let totalPrice = amount * pricePerDroid;
if (amount === null) {
  console.log("Отменено пользователем!");
} else if (Number.isNaN(Number(amount))) {
  console.log("Введите число");
} else if (credits >= totalPrice) {
  console.log(
    `Вы купили ${amount} дроидов, на счету осталось ${totalPrice} кредитов.`
  );
} else {
  console.log("Недостаточно средств на счету!");
}
