const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let pass = prompt("Введите пароль");
if (pass === null) {
  message = "Отменено пользователем!";
} else if (pass === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
