// 3. (2p) Totala längden av orden
// Skriv klart funktionen som räknar ut den totala längden av dom 3 orden.

function totalWordLength(word1, word2, word3) {
  // Funktion som tar tre strängargument och returnerar summan av deras längder.
  return word1.length + word2.length + word3.length;
}

const result = totalWordLength("hej", "på", "dig"); // Anropar funktionen med tre strängar och tilldelar resultatet till variabeln result.
console.log(result); // Skriver ut resultatet, som bör vara 8 eftersom "hej", "på", och "dig" har längderna 3, 2, och 3.
