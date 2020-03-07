const calculateEngravingPrice = function(message, pricePerWord) {
  const messageArray = message.split(" ");
  const sum = messageArray.length * pricePerWord;
  return `Цена гравировки ${messageArray.length} слов по цене ${pricePerWord}:  ${sum}`;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
