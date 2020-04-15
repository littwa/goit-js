// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
 {
  url:
   "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "White and Black Long Fur Cat"
 },
 {
  url:
   "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "Orange and White Koi Fish Near Yellow Koi Fish"
 },
 {
  url:
   "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "Group of Horses Running"
 }
];

let ulGallery = document.querySelector("ul#gallery");

function createGallery(images) {
 let arrLiImg = images.reduce((acc, el) => {
  acc.push(`<li><img src="${el.url}" alt='${el.alt}'></li>`);
  return acc;
 }, []);

 return arrLiImg.join("");
}

ulGallery.insertAdjacentHTML("afterbegin", createGallery(images));

ulGallery.querySelectorAll("ul#gallery li img").forEach(el => el.classList.add("liclass"));

//Другой вариант:

// function createGallery(images) {
//  let div = document.createElement("div");
//  images.forEach(el => {
//   let elLiImg = `<li><img class="liclass" src="${el.url}" alt="${el.alt}""></li>`;
//   div.insertAdjacentHTML("afterbegin", elLiImg);
//  });
//  return ulGallery.insertAdjacentHTML("afterbegin", div.innerHTML);
// }

// createGallery(images);
