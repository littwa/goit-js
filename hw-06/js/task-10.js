import users from "./users.js";
//Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users =>
 users
  .reduce((acc, user) => {
   acc.push(...user.skills);
   return acc;
  }, [])
  .reduce((acc, skill) => {
   if (!acc.includes(skill)) {
    acc.push(skill);
   }
   return acc;
  }, [])
  .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
