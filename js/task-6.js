// let input;
let total = 0;

for (
  let input = prompt('Введите число:');
  input !== null;
  input = prompt('Введите число:')
) {
  input = Number(input);
  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  total += input;
}

// while (true) {
//   input = prompt('Введите число:');
//   if (input === null) {
//     break;
//   }
//   input = Number(input);
//   if (Number.isNaN(input)) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }
//   total += input;
// }

alert(`Общая сумма чисел равна ${total}`);
