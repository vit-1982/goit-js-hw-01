let country = prompt('Введите страну доставки:');
let deliveryPrice;

if (country !== null) {
  country = country.charAt(0).toUpperCase() + country.substr(1).toLowerCase();

  switch (country) {
    case 'Китай':
      deliveryPrice = 100;
      break;

    case 'Чили':
      deliveryPrice = 250;
      break;

    case 'Австралия':
      deliveryPrice = 170;
      break;

    case 'Индия':
      deliveryPrice = 80;
      break;

    case 'Ямайка':
      deliveryPrice = 120;
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
}

if (deliveryPrice > 0) {
  console.log(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
}
