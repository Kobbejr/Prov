// 4	Skriv klart funktionen sumArray
// sumArray returnerar summan av alla talen i arrayen som skickas till den:

// En funktion 'sumArray' som tar en array av tal ('numbers') som parameter och returnerar summan av alla tal i arrayen.
function sumArray(numbers) {
  // Initialiserar en variabel 'sum' till 0 för att hålla reda på summan av talen.
  let sum = 0;

  // Använder forEach-loopen för att iterera genom varje tal i arrayen och addera det till 'sum'.
  numbers.forEach((number) => {
    sum += number;
  });

  // Returnerar den totala summan av alla tal i arrayen.
  return sum;
}

// En alternativ funktion 'sumArrayForLoop' som använder en for-loop för att uppnå samma resultat.
function sumArrayForLoop(numbers) {
  // Initialiserar en variabel 'sum' till 0 för att hålla reda på summan av talen.
  let sum = 0;

  // Använder en for-loop för att iterera genom varje tal i arrayen och addera det till 'sum'.
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum += number;
  }

  // Returnerar den totala summan av alla tal i arrayen.
  return sum;
}

// Använder funktionerna 'sumArray' och 'sumArrayForLoop' med olika arrayer och loggar resultaten till konsolen.
console.log(sumArray([1, 2, 3, 4, 5])); // ska logga 15
console.log(sumArray([-1, -2, -3, -4, -5])); // ska logga -15
