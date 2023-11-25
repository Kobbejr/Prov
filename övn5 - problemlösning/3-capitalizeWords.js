// 3. (3p) Skriv en funktion, capitalizeWords, som tar en array av
// strängar som input och returnerar en ny array där varje
// ord börjar med en stor bokstav.

//----------------------------------------//

// function capitalizeWords(arr) {
//   return arr.map((word) => {
//     const capitalizedFirst = word.charAt(0).toUpperCase();
//     const rest = word.slice(1).toLowerCase();
//     return capitalizedFirst + rest;
//   });
// }

// const words = ["heJ", "pÅ", "dIg", "dU"];
// console.log(capitalizeWords(arr));

//-----------------------------------------------//

//Eller enklare med substring()

// En funktion 'capitalizeWords' som tar en array av ord ('arr') som parameter och returnerar en ny array med varje ord där första bokstaven är stor och resten är små.
// Använder map-metoden för att iterera genom varje ord i arrayen och applicerar kapitalisering.
function capitalizeWords(arr) {
  return arr.map((word) => {
    // Hämtar den första bokstaven i varje ord.
    const firstLetter = word.substring(0, 1);
    // Hämtar resten av ordet efter den första bokstaven.
    const theRest = word.substring(1);
    // Returnerar det kapitaliserade ordet genom att sätta den första bokstaven som stor och resten som små.
    return firstLetter.toUpperCase() + theRest.toLowerCase();
  });
}

// Loggar resultatet av att kapitalisera varje ord i arrayen.
console.log(capitalizeWords(["hej", "på", "dIg", "dU"]));
