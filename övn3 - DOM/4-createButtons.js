// 4.1 (3p) Skriv kod som lägger till 10 button element till html-sidan.
// Varje button ska innehålla en klass "primary"
// och texten "Button" + talet 1 till 10.
// Så här: <button class="primary">Button1</button> <button class="primary">Button2</button> ...
// Koden kan använda en for-loop

// 4.2 (2p) Lägg till addEventlistener på varje button.
// Vid eventet "click" på button ska klassen ändras till "secondary"

const myElement2 = document.querySelector("#my-element2"); // Hämtar DOM-elementet med id "my-element2".

for (let i = 1; i < 11; i++) {
  // Skapar en loop som skapar 10 knappelement (button) och lägger till dem i myElement2.
  const btnEl = document.createElement("button"); // Skapar ett nytt button-element.
  btnEl.setAttribute("class", "primary"); // Sätter klassattributet till "primary".
  btnEl.textContent = "Button" + i; // Sätter textinnehållet till "Button" + aktuellt index (i).

  btnEl.addEventListener("click", (e) => {
    // Lägger till en klickhändelselyssnare för varje knapp.
    const el = e.target; // Hämtar det element som klickades på.

    if (el.className == "primary") {
      el.className = "secondary"; // Om klassen är "primary", ändra till "secondary".
    } else {
      el.className = "primary"; // Om klassen inte är "primary", ändra till "primary".
    }
  });

  myElement2.appendChild(btnEl); // Lägger till den skapade knappen i myElement2.
}
