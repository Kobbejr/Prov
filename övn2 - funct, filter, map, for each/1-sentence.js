// 1.1 (2p) Använd forEach för att lägga ihop orden i words-arrayen till ett långt ord
// som sparas i variabeln myWord.

let myWord = ""; // Skapar en tom strängvariabel med namnet myWord.

const words = ["programming", "is", "fun"]; // Skapar en array med tre strängar.

words.forEach((word) => (myWord += word)); // Loopar igenom varje element i arrayen och lägger till varje ord i myWord-strängen.

console.log(myWord); // Ska logga: "programmingisfun";

// 1.2 (2p) Använd en for-lop för att lägga ihop orden i words-arrayen till en mening
// med mellanslag mella varje ord.

let sentence = ""; // Skapar en tom strängvariabel med namnet sentence.

for (let i = 0; i < words.length; i++) {
  // Loopar igenom varje element i arrayen words.
  const word = words[i]; // Hämtar det aktuella ordet i arrayen.

  if (i == words.length - 1) {
    // Kontrollerar om det är det sista ordet i arrayen.
    sentence += word; // Om det är det sista ordet, lägg bara till ordet i sentence.
  } else {
    sentence += word + " "; // Om det inte är det sista ordet, lägg till ordet med ett mellanslag i sentence.
  }
}

console.log(sentence); // Ska logga "programming is fun";
