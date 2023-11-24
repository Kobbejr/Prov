// 4 Skriv en funktion som tar en array med strängar som input och
// returnerar en array med bara de strängar som är minst 4 tecken långa.

// En funktion 'minFour' som tar en array av ord ('words') som parameter och returnerar en ny array med ord som har en längd större än 4.
function minFour(words) {
  // Använder filter-metoden för att skapa en ny array ('filteredWords') med ord som har en längd större än 4.
  const filteredWords = words.filter((word) => {
    return word.length > 4;
  });

  // Returnerar den nya arrayen med filtrerade ord.
  return filteredWords;
}

// Använder funktionen 'minFour' med en array av ord och loggar det filtrerade resultatet till konsolen.
console.log(minFour(["hej", "hejsan"])); // ska logga ["hejsan"]
