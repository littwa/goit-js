import users from "./users.js";

//Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => users.reduce((acc, user) => user.balance + acc, 0);

// И такой вариант:

// const calculateTotalBalance = users => {
//  let suma = 0;
//  users.forEach(user => (suma += user.balance));
//  return suma;
// };

console.log(calculateTotalBalance(users)); // 20916
