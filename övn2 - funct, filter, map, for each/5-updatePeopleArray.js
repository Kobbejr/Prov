// 7.1 (2p) Skriv klart funktionen updatePeople
// som lägger till en property:
// adult: true
// om personen i arrayen är 18 år eller över annars
// en property:
// adult: false
// funktionen ska returnera den uppdaterade arrayen.

const people = [
  { name: "Alice", age: 30 }, // Skapar ett objekt som representerar Alice med ålder 30.
  { name: "Bob", age: 15 }, // Skapar ett objekt som representerar Bob med ålder 15.
  { name: "Charlie", age: 35 }, // Skapar ett objekt som representerar Charlie med ålder 35.
  { name: "Fred", age: 19 }, // Skapar ett objekt som representerar Fred med ålder 19.
  { name: "Alice", age: 6 }, // Skapar ett objekt som representerar en annan Alice med ålder 6.
];

function updatePeople(peopleArr) {
  return peopleArr.map((person) => {
    // person.adult = person.age >= 18;  // Lägger till en egenskap 'adult' i varje personobjekt baserat på om personen är vuxen (kommenterad ut).
    // return person;  // Returnerar varje person i den befintliga arrayen (kommenterad ut).
    const adult = person.age >= 18; // Skapar en variabel 'adult' som är sann om personen är 18 år eller äldre.
    return { ...person, adult: adult }; // Skapar ett nytt objekt med samma egenskaper som det befintliga objektet, men med tillägg av egenskapen 'adult'.
  });
}

console.log(updatePeople(people)); // Skriver ut den uppdaterade arrayen av personer med den nya egenskapen 'adult'.

// 7.2 (2p) Skriv en funktion med arrayen people som input som
// returnerar en array med bara vuxna. Alltså age minst 18 år.

function filterAdults(peopleArr) {
  // Funktion för att filtrera ut endast vuxna personer från en array av personobjekt.

  const onlyAdults = peopleArr.filter((person) => {
    return person.age >= 18; // Använder filter-metoden för att behålla endast de personer vars ålder är 18 år eller äldre.
  });

  return onlyAdults; // Returnerar den nya arrayen med endast vuxna personer.
}

console.log(filterAdults(people)); // Anropar funktionen med arrayen 'people' och skriver ut resultatet.
