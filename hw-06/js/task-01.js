import users from "./users.js";

// Получить массив имен всех пользователей (поле name).

const getUserNames = users => users.map(user => user.name);

// Еще такой вариант:

// const getUserNames = users => {
//   let arr = [];
//   users.forEach(user => arr.push(user.name));
//   return arr;
// };

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
