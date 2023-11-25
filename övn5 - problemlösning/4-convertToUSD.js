// Skriv en funktion, convertToUSD som konverterar värdena i currencies
// till USD. Använd exchangeRates för att göra uträkningen

//-------------------------------------------//

// const exchangeRates = {
//   EUR: 1.12, // Euro till USD
//   GBP: 1.32, // Brittiskt pund till USD
//   JPY: 0.0094, // Japansk yen till USD
// };

// const currencies = [
//   { currency: "EUR", value: 100 }, // 100 Euro
//   { currency: "GBP", value: 50 }, // 50 Brittiskt pund
//   { currency: "JPY", value: 5000 }, // 5000 Japansk yen
// ];

// function convertToUSD(currencyArr) {
//   return currencyArr.map((item) => ({
//     currency: item.currency,
//     value: item.value * exchangeRates[item.currency],
//   }));
// }

// console.log(convertToUSD(currencies));
/* 
ska logga 
[{ currency: 'EUR', value: 112 },
{ currency: 'GBP', value: 66 },
{ currency: 'JPY', value: 47 }]
*/

//-----------------------------------------------//

//ELLER
//Davids sätt

const exchangeRates = {
  EUR: 1.12, // Euro till USD
  GBP: 1.32, // Brittiskt pund till USD
  JPY: 0.0094, // Japansk yen till USD
};

const currencies = [
  { currency: "EUR", value: 100 }, // 100 Euro
  { currency: "GBP", value: 50 }, // 50 Brittiskt pund
  { currency: "JPY", value: 5000 }, // 5000 Japansk yen
];

// En funktion 'convertToUSD' som tar en array av valutaposter ('currencyArr') som parameter och returnerar en ny array
//där varje post har ett konverterat värde i USD.
// Använder map-metoden för att iterera genom varje valutapost och utföra valutakonvertering baserat på aktuella växelkurser.
function convertToUSD(currencyArr) {
  // Använder map-metoden för att skapa en ny array ('usdArr') där varje valutapost har ett konverterat värde i USD.
  const usdArr = currencyArr.map((item) => {
    // Beräknar det konverterade värdet i USD genom att multiplicera värdet med motsvarande växelkurs från 'exchangeRates'.
    const usdValue = exchangeRates[item.currency] * item.value;
    // Returnerar en kopia av valutaposten med det uppdaterade USD-värdet.
    return { ...item, value: usdValue };
    //---- Alternativt sätt att uppdatera värdet direkt i den befintliga valutaposten:---//
    // item.value = usdValue;
    // return item;
  });
  // Returnerar den resulterande arrayen med konverterade USD-värden.
  return usdArr;
}

// Loggar resultatet av att konvertera valutaposter till USD.
console.log(convertToUSD(currencies));
