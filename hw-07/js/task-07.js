// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

let InputFontSizeControl = document.querySelector("input#font-size-control");
let spanText = document.querySelector("span#text");

InputFontSizeControl.addEventListener("input", callbackFont);

function callbackFont(e) {
 spanText.style.fontSize = e.target.value + "px";
}
