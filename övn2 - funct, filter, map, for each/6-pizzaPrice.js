// 8. (2p) Skriv klart funktionen pizzaPrice som tar en pizza-sort
// som input och returnerar priset.
// Pizza-sorterna är begränsade till följande pizzor:
// "hawaii", "peperoni" och "vegetarian"
// En "hawaii" kostar 80 kr
// En "peperoni" kostar 90 kr
// En "vegetarian" kostar 85 kr

function pizzaPrice(pizza) {
  const pizzaLowerCase = pizza.toLowerCase();
  // Konverterar pizzan till gemener för att göra jämförelsen fall-agnostic.

  // Din kod här.
  // if (pizzaLowerCase == "hawaii") {
  //   return 80;
  // } else if (pizzaLowerCase == "peperoni") {
  //   return 90;
  // } else if (pizzaLowerCase == "vegetarian") {
  //   return 85;
  // } else {
  //   return "Not on the menu";
  // }

  switch (pizzaLowerCase) {
    case "hawaii":
      return 80; // Returnerar pris för Hawaii-pizza om matchningen lyckas.
    case "peperoni":
      return 90; // Returnerar pris för Peperoni-pizza om matchningen lyckas.
    case "vegetarian":
      return 85; // Returnerar pris för Vegetarian-pizza om matchningen lyckas.

    default:
      return "Not on the menu"; // Returnerar detta om ingen matchning hittades.
  }

  return result; // Detta kommer aldrig att köras eftersom switch-blocket alltid kommer att returnera innan detta nås.
}

const pizzaPrices = {
  hawaii: 80,
  peperoni: 90,
  vegetarian: 85,
};

const price = pizzaPrices["hawaii"]; // Hämtar priset för Hawaii-pizza från det statiska objektet pizzaPrices.

console.log(pizzaPrice("hawaii")); // Anropar funktionen pizzaPrice med en specifik pizzatyp och loggar resultatet till konsolen.
