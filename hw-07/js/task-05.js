// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

let inputText = document.querySelector("#name-input");
let outputText = document.querySelector("#name-output");

inputText.addEventListener("input", changeSpan);

function changeSpan(e) {
 if (inputText.value === "") {
  outputText.textContent = "незнакомец";
 } else {
  outputText.textContent = e.currentTarget.value;
 }
}
