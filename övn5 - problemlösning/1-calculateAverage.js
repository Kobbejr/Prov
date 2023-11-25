// 1. (3p) Använd forEach för att skapa en funktion, calculateAverage,
// som tar en array av tal som input och returnerar medelvärdet
// av dessa tal.
// tips: Googla hur man räknar ut medelvärdet av ett antal tal

// En funktion 'calculateAverage' som tar en array ('arr') som parameter och returnerar medelvärdet av elementen i arrayen.
function calculateAverage(arr) {
  // En variabel 'sum' som används för att lagra summan av elementen i arrayen.
  let sum = 0;

  // En forEach-loop som itererar genom varje element i arrayen och adderar det till 'sum'.
  arr.forEach(function (num) {
    sum += num;
  });

  // En variabel 'average' som beräknas genom att dela summan av elementen med antalet element i arrayen.
  average = sum / arr.length;

  // Loggar det beräknade medelvärdet till konsolen.
  console.log(average);
}

// En array 'arr' med nummer som används för att beräkna medelvärdet.
const arr = [1, 2, 3, 4, 5];

// Anropar funktionen 'calculateAverage' med arrayen 'arr'.
calculateAverage(arr);
