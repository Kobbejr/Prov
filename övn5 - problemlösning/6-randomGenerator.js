// Skriv en funktion, generateRandomNumbers, som tar
// två parametrar: min och max. Funktionen ska generera
// och returnera en array med 10 slumpmässiga heltal mellan min och max.
// tips Math.random() ger en slumpad siffra mellan 0 och 1

// En funktion 'generateRandomNumbers' som genererar en array med 10 slumpmässiga heltal mellan det angivna intervallet [min, max].
function generateRandomNumbers(min, max) {
  // En tom array ('myRandom') för att lagra de slumpmässiga heltalen.
  let myRandom = [];

  // Använder en for-loop för att generera 10 slumpmässiga heltal och lägga till dem i arrayen.
  for (let i = 0; i < 10; i++) {
    // Använder Math.random() för att generera ett slumpmässigt decimaltal mellan 0 och 1.
    // Genom att multiplicera och avrunda får vi ett heltal inom det angivna intervallet [min, max].
    myRandom.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  // Returnerar den genererade arrayen med slumpmässiga heltal.
  return myRandom;
}

// Loggar resultatet av att generera 10 slumpmässiga heltal mellan 1 och 10.
console.log(generateRandomNumbers(1, 10));
