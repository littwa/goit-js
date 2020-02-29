let cost;
let country = prompt("Введите страну");

if (country === null) {
  alert("Отменено пользователем");
} else {
  country = country.toLowerCase();
  switch (country) {
    case "китай":
      cost = 100;
      break;

    case "чили":
      cost = 250;
      break;

    case "австралия":
      cost = 170;
      break;

    case "индия":
      cost = 80;
      break;

    case "ямайка":
      cost = 120;
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}

if (cost) {
  alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
}
