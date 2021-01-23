"use strict";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

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

let category = ["Перфораторы", "Шуруповерты", "Ключи", "Отвертки"];

let i = 0;
let product_cards_info = [];

while (i < 18) {
  let price = Math.round(getRandomArbitrary(5000, 20000))
  product_cards_info = {
    url: img_name[Math.floor(Math.random() * img_name.length)],
    brand: brend[Math.floor(Math.random() * brend.length)],
    title: title[Math.floor(Math.random() * title.length)],
    price: price,
    category: category[Math.floor(Math.random() * category.length)],
    discount: Math.round(price*(1+0.15))/100,
    flag: "flag",
    isElectric: "isElectric",
  };
  i++;
  console.log(product_cards_info);
}
