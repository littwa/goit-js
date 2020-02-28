let input;
let total = 0;

if(Number.isNaN(Number(input = prompt('Введите число')))){alert('Было введено не число, попробуйте еще раз')}
else{
  do {
	input = prompt('Введите число');
	total += Number(input);
} 
while (input !== null);
alert(`Общая сумма чисел равна ${total}`)};
