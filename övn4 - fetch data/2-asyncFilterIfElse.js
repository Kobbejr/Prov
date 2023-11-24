// 10.1 Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// userId: 1

// 10.2 Lägg till en done-knapp under varje titel. Om todo-objektet är genomfört,
// alltså completed: true, så ska det stå "Undo" på knappen annars "Done"

// 10.3 Knappen ska kunna växla mellan "Undo" och "Done" när man trycker på den.
// Om det står "Undo" på knappen ska titeln vara genomstruken, alltså i css:
// text-decoration: line-through;
// Annars ska den inte vara det.

async function getTodos() {
  // Hämtar todos-data från JSONPlaceholder API.
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json(); // Konverterar API-svaret till JSON-format.

  // Filtrerar ut endast de todos som tillhör userId 1.
  const filteredData = data.filter((todo) => todo.userId == 1);

  // Loopar igenom varje filtrerat todo och skapar ett div-element med en knapp för varje.
  filteredData.forEach((todo) => {
    const btn = document.createElement("button");
    const todoEl = document.createElement("div");

    // Anpassar knappens text och div-elementets textdekor beroende på om todo är avklarad eller inte.
    if (todo.completed === true) {
      btn.textContent = "Undo";
      todoEl.style.textDecoration = "line-through";
    } else {
      btn.textContent = "Done";
    }

    // Lägger till en klickhändelselyssnare för knappen.
    btn.addEventListener("click", (e) => {
      const element = e.currentTarget;
      if (todo.completed) {
        btn.textContent = "Done";
        todoEl.style.textDecoration = "none";
      } else {
        btn.textContent = "Undo";
        todoEl.style.textDecoration = "line-through";
      }
      todo.completed = !todo.completed; // Inverterar completed-statusen för todo vid varje klick.
    });

    // Uppdaterar innerHTML för div-elementet med todo-titel och userId.
    todoEl.innerHTML = `<h2>${todo.title} ${todo.userId} </h2> `;

    // Lägger till div-elementet i body i DOM.
    document.body.appendChild(todoEl);

    // Lägger till div-elementet i överordnat element för att hålla todos-informationen.
    todosElement.appendChild(todoEl);

    // Lägger till knappen i div-elementet.
    todoEl.appendChild(btn);
  });

  console.log(data); // Loggar hela todos-datasetet till konsolen.
}

getTodos(); // Anropar funktionen för att hämta och visa todos-informationen.
