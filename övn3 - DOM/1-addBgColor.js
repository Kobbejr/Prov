// 1. (2p) Skriv klart funktionen addBgColor.
// addBgColor tar in ett DOM-element och en färg-kod,
// addBgColor ska uppdatera elementets style med färgkoden.
// tips: använd elementets style

const element = document.querySelector("#my-element"); // Hämtar elementet med id "my-element" från DOM.

function addBgColor(element, bgColor) {
  // Funktion för att ändra bakgrundsfärgen på ett givet element.
  element.style.backgroundColor = bgColor;
}

addBgColor(element, "#ff0000"); // Ska göra elementet rött genom att använda funktionen addBgColor.

const element2 = document.querySelector("#element2"); // Hämtar elementet med id "element2" från DOM.
addBgColor(element2, "#00ff00"); // Använder funktionen addBgColor för att göra element2 grönt genom att ändra bakgrundsfärgen.
