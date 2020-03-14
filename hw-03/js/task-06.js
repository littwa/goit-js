// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена * количество).

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const calculateTotalPrice = function(allProdcuts, productName) {
  let tot = 0;
  for (let i = 0; i < allProdcuts.length; i += 1) {
    for (let key in allProdcuts[i]) {
      if (allProdcuts[i][key] === productName) {
        tot = allProdcuts[i].price * allProdcuts[i].quantity;
      }
    }
  }
  return tot;
};

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
