let credits = 23580;
const pricePerDroid = 3000;
let amount = prompt('Какое количество дроидов пользователь хочет купить?')
if(amount === null){console.log(alert('Отменено пользователем!'))}
if(23580 >= amount * 3000){console.log(`Вы купили ${amount} дроидов, на счету осталось ${23580 -  3000 * amount} кредитов.`)}
if(23580 <= amount * 3000){console.log('Недостаточно средств на счету!')};