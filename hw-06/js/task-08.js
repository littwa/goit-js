import users from "./users.js";

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) =>
 users.reduce((acc, user) => {
  if (user.friends.includes(friendName)) {
   acc.push(user.name);
  }
  return acc;
 }, []);

//Как сделать чтобы работало если callback вынести отдельно(закоментированый код ниже)?

// let callback = (acc, user) => {
//  if (user.friends.includes(friendName)) {
//   acc.push(user.name);
//  }
//  return acc;
// };

// const getUsersWithFriend = (users, friendName) => users.reduce(callback, []);

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
