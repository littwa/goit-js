// В HTML есть пустой список ul#ingredients.

// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

let ulIngredients = document.querySelector("ul#ingredients");

function cr(ingredients) {
 let elementLi;
 let arrayElementLi = ingredients.reduce((acc, el) => {
  elementLi = document.createElement("li");
  elementLi.textContent = el;
  acc.push(elementLi);
  return acc;
 }, []);

 return arrayElementLi;
}

ulIngredients.append(...cr(ingredients));
