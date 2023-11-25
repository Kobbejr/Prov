// 2. (3p) Skapa en funktion, removeDuplicates, som tar en array
// med element och returnerar en ny array där alla duplicerade
// element har tagits bort och endast unika element finns kvar.

// En array 'arr2' med duplicerade strängar.
let arr2 = ["apple", "mango", "apple", "orange", "mango", "mango"];

// En funktion 'removeDuplicates' som tar en array ('arr') som parameter och returnerar en ny array utan duplicerade element.
// Använder filter-metoden och jämför varje element med dess index för att identifiera och behålla endast det första förekommande elementet av varje unikt värde.
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Loggar resultatet av att ta bort duplicerade element från 'arr2'.
console.log(removeDuplicates(arr2));

// -----------------------------------//
// ALTERNATIVT SÄTT (Davids approach):
// -----------------------------------//

// En funktion 'removeDuplicates' som använder en forEach-loop för att iterera genom arrayen och skapa en ny array ('unique') utan duplicerade element.
function removeDuplicates(arr) {
  // En tom array 'unique' för att lagra unika element.
  const unique = [];

  // Itererar genom varje element i arrayen.
  arr.forEach((item) => {
    // Kontrollerar om elementet redan finns i 'unique'.
    if (!unique.includes(item)) {
      // Om elementet inte finns, läggs det till i 'unique'.
      unique.push(item);
    }
  });

  // Returnerar den nya arrayen utan duplicerade element.
  return unique;
}

// Loggar resultatet av att ta bort duplicerade element från en annan array.
console.log(removeDuplicates(["hej", "hej", "hopp"]));
