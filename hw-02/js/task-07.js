const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const addLogin = function(allLogins, login) {
  const isLoginValid = function(login) {
    if (login.length >= 4 && login.length <= 16) {
      return true;
    }
  };

  const isLoginUnique = function(allLogins, login) {
    if (!allLogins.includes(login)) {
      return true;
    }
  };

  if (
    isLoginUnique(allLogins, login) === true &&
    isLoginValid(login) === true
  ) {
    logins.push(login);
    return "Логин успешно добавлен!";
  } else if (isLoginUnique(allLogins, login) !== true) {
    return "Такой логин уже используется!";
  } else {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
