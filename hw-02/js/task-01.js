const logItems = function(array) {
  for (const item of array) {
    let number = array.indexOf(item) + 1;
    console.log(number, item);
  }
};

const arrayName = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const arreyNum = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

logItems(arrayName);
logItems(arreyNum);
