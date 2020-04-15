// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

let inputHtml = document.querySelector("#validation-input");

inputHtml.addEventListener("change", callback);
function callback() {
 {
  if (inputHtml.value.length === Number(inputHtml.dataset.length)) {
   inputHtml.classList.remove("invalid");
   inputHtml.classList.add("valid");
  } else {
   inputHtml.classList.add("invalid");
   inputHtml.classList.remove("valid");
  }
 }
}

// elem.classList.replace(old, new) в данной задаче невозможно задействовать?
