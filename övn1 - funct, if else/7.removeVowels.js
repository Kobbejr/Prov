// 3. Skriv klart funktionen removeVowels som tar
// bort vokaler, alltså bokstäverna: aouåeiyäö.

// En array 'vowels' som innehåller vokaler som ska tas bort från ordet.
const vowels = ["a", "o", "u", "å", "e", "i", "y", "ä", "ö"];

// En funktion 'removeVowels' som tar ett ord ('word') som parameter och returnerar en ny sträng utan vokaler.
function removeVowels(word) {
  // En variabel 'wordWithoutVowels' som används för att lagra det nya ordet utan vokaler.
  let wordWithoutVowels = "";

  // En for-loop som itererar genom varje bokstav i ordet.
  for (let index = 0; index < word.length; index++) {
    // Hämtar den aktuella bokstaven.
    const letter = word[index];

    // Kontrollerar om bokstaven inte finns i arrayen 'vowels'.
    if (!vowels.includes(letter)) {
      // Om bokstaven inte är en vokal, läggs den till i den nya strängen 'wordWithoutVowels'.
      wordWithoutVowels += letter;
    }
  }

  // Returnerar det nya ordet utan vokaler.
  return wordWithoutVowels;
}

// Använder funktionen 'removeVowels' med olika ord och loggar de resulterande orden utan vokaler till konsolen.
console.log(removeVowels("hej")); // Ska logga "hj"
console.log(removeVowels("hallå")); // Ska logga "hll"
