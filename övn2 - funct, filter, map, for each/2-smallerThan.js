// 2.1 (2p) Använd filter för att filtrera numbers och
// skapa en ny array med alla tal som är mindre än 50.
// Den nya arrayen ska sparas i en variabel som heter smallerThan50.

const numbers = [200, 54, 582, 33, 4]; // Skapar en array med olika heltal.

const smallerThan50 = numbers.filter((number) => {
  // Använder filter-metoden för att skapa en ny array med endast de tal som är mindre än 50.
  return number < 50;
});

console.log(smallerThan50); // Skriver ut den resulterande arrayen med tal mindre än 50.

// 2.2 (2p) Använd map på arrayen numbers2 och
// skapa en ny array där alla tal är tripplade. Alltså gånger 3.
// Den nya arrayen ska sparas i en variabel som heter tripple.

const numbers2 = [...numbers]; // Skapar en kopia av arrayen numbers med hjälp av spread operator.

const triple = numbers2.map((number) => {
  // Använder map-metoden för att skapa en ny array där varje tal är tripplat.
  return number * 3;
});

console.log(triple); // Skriver ut den resulterande arrayen med tripplade tal.
