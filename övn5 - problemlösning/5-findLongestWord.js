// Skapa en funktion, findLongestWord, som tar en sträng som input
// och returnerar det längsta ordet i strängen.

//----------------------------------------------------//

// function findLongestWord(str) {
//   let strSplit = str.split(" ");
//   let longestWord = 0;
//   for (let i = 0; i < strSplit.length; i++) {
//     if (strSplit[i].length > longestWord) {
//       longestWord = strSplit[i].length;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//-----------------------------------------------------------------------//

// En funktion 'findLongestWord' som tar en mening ('sentence') som parameter och returnerar det längsta ordet i meningen.
function findLongestWord(sentence) {
  // Delar upp meningen i ord genom att använda split-metoden och ange mellanslag som avgränsare.
  let words = sentence.split(" ");
  // En variabel ('longestWord') för att hålla reda på det längsta ordet, inledningsvis satt till en tom sträng.
  let longestWord = "";

  // Använder forEach-metoden för att iterera genom varje ord i arrayen av ord.
  words.forEach((word) => {
    // Kollar om längden på det aktuella ordet är större än längden på det för närvarande längsta ordet.
    if (word.length > longestWord.length) {
      // Om så är fallet, uppdaterar 'longestWord' till det aktuella ordet.
      longestWord = word;
    }
  });

  // Returnerar det längsta ordet efter att ha gått igenom alla ord i meningen.
  return longestWord;
}

// Loggar resultatet av att hitta det längsta ordet i den angivna meningen.
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
