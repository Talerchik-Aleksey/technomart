"use strict"; // strict mode

const PRODUCT_CARDS_COUNT = 18; // number of cards with product information

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // min max include
}

function productСardsСreator() {
  let temporaryData = [];

  for (let index = 0; index < PRODUCT_CARDS_COUNT; index++) {
    temporaryData.push(productCardsInfoCreator());
  }
  return temporaryData;
}

function productCardsInfoCreator() {
  const PRICE = getRandomIntInclusive(5000, 20000);
  const imgNames = [
    "bosch-2000",
    "bosch-3000",
    "bosch-6000",
    "bosch-9000",
    "makita-td-110",
  ];

  const brends = ["BOSCH", "Makita", "Vagner", "Mega", "Proline"];

  const titles = [
    "Перфоратор BOSCH BFG 2000",
    "Перфоратор BOSCH BFG 3000",
    "Перфоратор BOSCH BFG 6000",
    "Перфоратор BOSCH BFG 9000",
    "Шуруповерт Makita TD-110",
  ];

  const flags = ["new", "promo", "none"];

  const categories = ["Перфораторы", "Шуруповерты", "Ключи", "Отвертки"];

  let productCardsInfo = {
    url:
      "../img/catalog/" +
      imgNames[getRandomIntInclusive(0, imgNames.length - 1)] +
      ".img",
    brend: brends[getRandomIntInclusive(0, brends.length - 1)],
    title: titles[getRandomIntInclusive(0, titles.length - 1)],
    price: PRICE,
    category: categories[getRandomIntInclusive(0, categories.length - 1)],
    discount: Math.floor((PRICE * (1 + 0.15)) / 500) * 500,
    flag: flags[getRandomIntInclusive(0, flags.length - 1)],
    isElectric: getRandomIntInclusive(0, 1) == 1,
  };
  return productCardsInfo;
}

let productCardsRepository = [];

productCardsRepository = productCardsRepository.concat(productСardsСreator()); // productCardsRepository save cards information
console.log(productCardsRepository);
