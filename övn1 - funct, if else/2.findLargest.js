// 2.	Skriv klart funktionen findLargest.
// findLargest ska returnera det största numret i arrayen som skickas till den:

// En funktion 'findLargest' som tar en array av tal ('numbers') som parameter.
function findLargest(numbers) {
  // Initialiserar en variabel 'largest' med det första talet i arrayen.
  let largest = numbers[0];

  // Använder forEach-loopen för att iterera genom varje tal i arrayen.
  numbers.forEach((number) => {
    // Om det aktuella talet är större än det nuvarande största talet, uppdatera 'largest'.
    if (number > largest) {
      largest = number;
    }
  });

  // Returnerar det största talet i arrayen.
  return largest;
}

// Använder funktionen 'findLargest' med olika arrayer och loggar resultaten till konsolen.
console.log("findLargest", findLargest([1, 2, 3, 4, 5])); // ska logga 5
console.log(findLargest([-1, -2, -3, -4, -5])); // ska logga -1

// 2.1	Skriv klart funktionen findSmallest.
// findSmallest ska returnera det minsta talet i arrayen.

// En funktion 'findSmallest' som tar en array av tal ('numbers') som parameter.
function findSmallest(numbers) {
  // Initialiserar en variabel 'smallest' med det första talet i arrayen.
  let smallest = numbers[0];

  // Använder forEach-loopen för att iterera genom varje tal i arrayen.
  numbers.forEach((number) => {
    // Om det aktuella talet är mindre än det nuvarande minsta talet, uppdatera 'smallest'.
    if (number < smallest) {
      smallest = number;
    }
  });

  // Returnerar det minsta talet i arrayen.
  return smallest;
}

// Använder funktionen 'findSmallest' med olika arrayer och loggar resultaten till konsolen.
console.log(findSmallest([1, 2, 3, 4, 5])); // ska logga 1
console.log(findSmallest([-1, -2, -3, -4, -5])); // ska logga -5
