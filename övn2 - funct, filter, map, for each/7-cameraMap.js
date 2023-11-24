const firstName = "David";
const lastName = "Shore";

// Skapar en fullständig namnsträng genom att konkatenera förnamn och efternamn.
const fullName = "Jag heter: " + firstName + " " + lastName;
console.log(fullName);

// Alternativt sätt att skapa en fullständig namnsträng med template literals.
const fullName2 = `Jag heter: ${firstName} ${lastName}`;

const products = [
  { name: "Camera", brand: "Canon", model: "EOS 70D" },
  { name: "Camera", brand: "Nikon", model: "D3400" },
  { name: "Camera", brand: "GoPro", model: "Hero 4" },
  { name: "Drone", brand: "DJI", model: "Phantom" },
  { name: "Drone", brand: "GoPro", model: "Karma" },
];

// Använder map-metoden för att skapa en ny array med endast modellinformation från varje produkt.
const result = products.map((product) => {
  return product.model;
  console.log("product.name: " + product.name + " brand: " + product.brand);
  // Ovanstående console.log kommer aldrig att köras eftersom den är placerad efter en return-sats.
});

console.log(result); // Skriver ut den nya arrayen som innehåller endast produktmodeller.
