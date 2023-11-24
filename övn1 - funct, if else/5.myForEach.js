// 1.1 Använd forEach för att summera talen i arrayen numbers
// och spara resultatet i variabeln sum.

// En variabel 'sum' som används för att lagra summan av talen i arrayen.
let sum = 0;

// En array 'numbers' som innehåller olika tal.
const numbers = [1, 54, 532, 33, 44];

// Använder forEach-loopen för att iterera genom varje tal i arrayen och addera det till 'sum'.
numbers.forEach((number) => {
  sum += number;
});

// Nu innehåller 'sum' den totala summan av talen i arrayen.

// 1.2 Använd myForEach som tar en array och en funktion som input
// för att summera talen i arrayen numbers
// och spara reslutatet i variabeln mySum.

// En variabel 'mySum' som används för att lagra summan av talen i arrayen med användning av en egen forEach-funktion.
let mySum = 0;

// En funktion 'myForEach' som emulerar forEach-loopen genom att använda en for-loop och anropa en annan funktion ('func') för varje element i arrayen.
function myForEach(array, func) {
  // Använder en for-loop för att iterera genom varje element i arrayen.
  for (let i = 0; i < array.length; i++) {
    // Anropar den angivna funktionen ('func') med det aktuella elementet som argument.
    func(array[i]);
  }
}

// Använder den egna forEach-funktionen 'myForEach' med en array ('numbers') och en funktion som adderar varje element till 'mySum'.
myForEach(numbers, (number) => {
  mySum += number;
});

// Loggar den totala summan från den ursprungliga forEach-loopen ('sum') och från den egna forEach-funktionen ('mySum') till konsolen.
console.log(sum, mySum);
