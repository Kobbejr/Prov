// 3. Skapa en div med ett B. Så här: <div>B</div>
// Lägg det mellan A och C på html-sidan.

const myElement = document.querySelector("#my-element"); // Hämtar DOM-elementet med id "my-element".
const cElement = document.querySelector("#C"); // Hämtar DOM-elementet med id "C".

const dElement = document.createElement("div"); // Skapar ett nytt div-element.
dElement.textContent = "D"; // Sätter textinnehållet till "D".

myElement.insertBefore(dElement, cElement); // Infogar det nya div-elementet (D) före elementet med id "C" i myElement.
