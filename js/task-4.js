let credits = 23580;
const pricePerDroid = 3000;

const numberOfDroids = prompt(
  'Введите количество дроидов, которое Вы хотите купить:',
);

if (numberOfDroids === null) {
  console.log('Отменено пользователем!');
} else {
  let totalPrice = Number(numberOfDroids) * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    if (Number.isNaN(credits) || Number(numberOfDroids) === 0) {
      console.log('Неверное значение!');
    } else {
      console.log(
        `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits} кредитов.`,
      );
    }
  }
}
