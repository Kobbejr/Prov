// 9.1 Skapa ett nytt object car2 med spread operatorn ...
// Det nya objektet ska updatera speed till 200.

// Skapar ett objekt 'car' med egenskaperna 'name' och 'speed'.
const car = {
  name: "Volvo",
  speed: 100,
};

// Skapar ett nytt objekt 'car2' genom att kopiera alla egenskaper från 'car' och ändra värdet på 'speed' till 200.
const car2 = { ...car, speed: 200 };

// Loggar det uppdaterade objektet 'car2' till konsolen.
console.log(car2);

// 9.2 Skapa två variabler name och speed genom
// destructuring av objektet car.

// Dekonstruerar objektet 'car' och skapar variabler 'names' och 'speed' med motsvarande värden.
const { name: names, speed } = car;

// Loggar värdena på 'names' och 'speed' till konsolen.
console.log(names, speed);
