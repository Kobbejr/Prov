// 2. (3p) Skapa ett inputfält och en knapp på html-sidan.
// När man klickar på
// knappen ska det man skrev i input-fältet synas nedanför
//input-fältet i en div.

const inputEl = document.getElementById("input"); // Hämtar DOM-elementet med id "input".
const btnEl = document.getElementById("btn"); // Hämtar DOM-elementet med id "btn".
const resultEl = document.getElementById("result"); // Hämtar DOM-elementet med id "result".

btnEl.addEventListener("click", (e) => {
  // Lägger till en lyssnare för klickhändelser på knappen.
  const inputValue = inputEl.value; // Hämtar värdet från input-elementet.

  resultEl.innerHTML = `<h1>${inputValue}</h1>`; // Uppdaterar innerHTML i result-elementet med en rubrik som innehåller input-värdet.
});
