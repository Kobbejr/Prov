// 4. Hämta och visa foton. 3p
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 20 fotona på sidan. OBS! Korten tar väldigt långtid att ladda!!!

// Skapar ett nytt div-element 'photosElement' för att hålla bilderna.
const photosElement = document.createElement("div");

// Lägger till 'photosElement' som barn till body i DOM.
document.body.appendChild(photosElement);

// En asynkron funktion 'getPhotos' för att hämta och visa bilder från JSONPlaceholder API.
async function getPhotos() {
  // Hämtar bild-data från JSONPlaceholder API.
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json(); // Konverterar API-svaret till JSON-format.

  // Filtrerar ut de första 20 bilderna.
  const filteredData = data.filter((photo) => photo.id <= 20);

  // Loopar igenom varje filtrerad bild och skapar ett img-element för varje.
  filteredData.forEach((photo) => {
    const photoEl = document.createElement("img");

    // Sätter bredden och höjden för varje bild till 100x100.
    photoEl.width = 100;
    photoEl.height = 100;

    // Sätter källan (src) för img-elementet till URL:en från den aktuella bilden.
    photoEl.src = photo.url;

    // Lägger till varje img-element i 'photosElement'.
    photosElement.appendChild(photoEl);
  });

  // Loggar de filtrerade bilderna och hela bild-datasetet till konsolen.
  console.log(filteredData);
  console.log(data);
}

// Anropar funktionen för att hämta och visa bilder.
getPhotos();
