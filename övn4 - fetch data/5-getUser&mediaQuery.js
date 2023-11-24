// 5. Responsive Users 3p
// Ladda ner users från denna url: https://jsonplaceholder.typicode.com/users
// För varje user ska name, email och city visas i en div och placeras under varandra.
// I desktop-vy ska divarna för varje user visas i 3 kolumner.
// I mobil-vy ska divarna för varje user visas i en kolumn med 100% width.

// Skapar ett nytt div-element 'containerEl' och sätter dess klass till "container".
const containerEl = document.createElement("div");
containerEl.setAttribute("class", "container");

// Lägger till 'containerEl' som ett child till body i DOM.
document.body.appendChild(containerEl);

// En asynkron funktion 'getUser' för att hämta och visa användarinformation från JSONPlaceholder API.
async function getUser() {
  // Hämtar användarinformation från JSONPlaceholder API.
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  // Loopar igenom varje användarobjekt och skapar ett div-element 'userEl' för varje.
  data.forEach((userData) => {
    const userEl = document.createElement("div");

    // Sätter klassen för varje 'userEl' till "section".
    userEl.setAttribute("class", "section");

    // Uppdaterar innerHTML för 'userEl' med användarinformation.
    userEl.innerHTML = `<h3>${userData.name} ${userData.email} ${userData.address.city}</h3>`;

    // Lägger till varje 'userEl' som ett child till 'containerEl'.
    containerEl.appendChild(userEl);
  });
}

// Sätter display-stilen för 'containerEl' till "grid".
containerEl.style.display = "grid";

// Skapar ett media query-objekt för att hantera förändringar i skärmens bredd.
const mediaQuery = window.matchMedia("(min-width: 768px)");

// En funktion 'handleScreenChange' som anpassar grid-template-columns baserat på skärmens bredd.
function handleScreenChange(e) {
  if (e.matches) {
    // Desktop view: Tre kolumner
    containerEl.style.gridTemplateColumns = "1fr 1fr 1fr";
  } else {
    // Mobile view: En kolumn
    containerEl.style.gridTemplateColumns = "1fr";
  }
}

// Anropar 'handleScreenChange' med aktuellt media query-status för initial setup.
handleScreenChange(mediaQuery);

// Lägger till en händelseslyssnare för att hantera förändringar i skärmens bredd.
mediaQuery.addListener(handleScreenChange);

// Anropar funktionen 'getUser' för att hämta och visa användarinformation.
getUser();
