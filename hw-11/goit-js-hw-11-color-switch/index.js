const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];

const randomIntegerFromInterval = (min, max) => {
 return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyTag = document.querySelector("body");
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
let id;
let checkBox = false;

btnStart.addEventListener("click", cbColorStart);
btnStop.addEventListener("click", cbColorStop);

function cbColorStart() {
 if (checkBox) {
  return;
 }
 checkBox = true;

 id = setInterval(() => {
  const randomInteger = randomIntegerFromInterval(0, colors.length - 1);

  bodyTag.style.backgroundColor = colors[randomInteger];
 }, 1000);
}

function cbColorStop() {
 clearInterval(id);
 bodyTag.style.backgroundColor = "initial";
 checkBox = false;
}
