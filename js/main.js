"use strict";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // min max include
}

/* function roundTo500(num) {
  return Math.floor(num / 500) * 500;
} */

function conditionCheaker(num) {
  return num == 1 ? true : false; // return true or false
}

function product_cards_creator() {
  let img_name = [
    "bosch-2000",
    "bosch-3000",
    "bosch-6000",
    "bosch-9000",
    "makita-td-110",
  ];

  let brend = ["BOSCH", "Makita", "Vagner", "Mega", "Proline"];

  let title = [
    "Перфоратор BOSCH BFG 2000",
    "Перфоратор BOSCH BFG 3000",
    "Перфоратор BOSCH BFG 6000",
    "Перфоратор BOSCH BFG 9000",
    "Шуруповерт Makita TD-110",
  ];

  let flag = ["new", "promo", "none"];

  let category = ["Перфораторы", "Шуруповерты", "Ключи", "Отвертки"];

  let i = 0;
  let product_cards_info = {};

  while (i < 18) {
    let price = getRandomIntInclusive(5000, 20000);
    product_cards_info = {
      url:
        "../img/catalog" +
        img_name[Math.floor(Math.random() * img_name.length)] +
        ".img",
      brand: brend[Math.floor(Math.random() * brend.length)],
      title: title[Math.floor(Math.random() * title.length)],
      price: price,
      category: category[Math.floor(Math.random() * category.length)],
      discount: Math.floor((price * (1 + 0.15)) / 500) * 500,
      flag: flag[Math.floor(Math.random() * flag.length)],
      isElectric: conditionCheaker(getRandomIntInclusive(0, 1)),
    };
    i++;
    console.log(product_cards_info);
  }
}

product_cards_creator();
