// В HTML есть список категорий ul#categories.

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.

let liCategory = document.querySelectorAll("ul#categories > li.item");
console.log(`В списке ${liCategory.length} категории`);

// 2 вариант:
// let ulCategories = document.querySelector("#categories");

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2)
//и количество элементов в категории (всех вложенных в него элементов li).

liCategory.forEach(el => {
 console.log(`Категория: ${el.querySelector("h2").textContent} 
Количество элементов: ${el.querySelectorAll("ul > li").length}`);
});

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
