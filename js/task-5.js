let country = prompt('Введите страну доставки:');
let deliveryPrice;

if (country !== null) {
  country = country.charAt(0).toUpperCase() + country.substr(1).toLowerCase();

  switch (country) {
    case 'Китай':
      deliveryPrice = 100;
      console.log(
        `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`,
      );
      break;

    case 'Чили':
      deliveryPrice = 250;
      console.log(
        `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`,
      );
      break;

    case 'Австралия':
      deliveryPrice = 170;
      console.log(
        `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`,
      );
      break;

    case 'Индия':
      deliveryPrice = 80;
      console.log(
        `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`,
      );
      break;

    case 'Ямайка':
      deliveryPrice = 120;
      console.log(
        `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`,
      );
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
}
