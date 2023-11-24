// 3. Samma ord?
// Skriv klart funktionen som kollar om två ord är likadana
// oberoende av stor och liten bokstav.

// En funktion 'compareWords' som tar två ord ('word1' och 'word2') som parametrar.
function compareWords(word1, word2) {
  // Jämför de två orden efter att ha omvandlat dem till versaler (upper case).
  return word1.toUpperCase() == word2.toUpperCase();
}

// Använder funktionen 'compareWords' med olika ord och loggar resultaten till konsolen.
console.log(compareWords("hej", "HEJ")); // Ska logga true
console.log(compareWords("hej", "nej")); // Ska logga false
