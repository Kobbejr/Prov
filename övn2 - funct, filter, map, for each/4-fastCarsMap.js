// 4 (2p) Använd map för att skapa en ny array fastCars där alla bilar har speed: 100.

const cars = [
  { type: "Volvo", speed: 50 }, // Skapar ett objekt som representerar en Volvo med hastighet 50.
  { type: "Ford", speed: 80 }, // Skapar ett objekt som representerar en Ford med hastighet 80.
  { type: "Opel", speed: 60 }, // Skapar ett objekt som representerar en Opel med hastighet 60.
];

const fastCars = cars.map((car) => {
  // car.speed = 100;  // Ändrar hastigheten på varje bil i den befintliga arrayen (kommenterad ut).
  // return car;  // Returnerar varje bil i den befintliga arrayen (kommenterad ut).
  return { ...car, speed: 100 }; // Skapar ett nytt objekt med samma egenskaper som det befintliga objektet, men med hastighet ändrad till 100.
});

console.log(fastCars); // Skriver ut den nya arrayen fastCars som innehåller objekten med uppdaterad hastighet.
