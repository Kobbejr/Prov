// Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// completed: true

const todosElement = document.createElement("div"); // Skapar ett nytt div-element för att hålla todos-informationen.
document.body.appendChild(todosElement); // Lägger till det skapade div-elementet som ett barn till body i DOM.

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/"); // Hämtar todos-data från JSONPlaceholder API.
  const data = await response.json(); // Konverterar API-svaret till JSON-format.
  const filteredData = data.filter((todo) => todo.completed == true); // Filtrerar ut endast de todos som är markerade som "completed".

  filteredData.forEach((todo) => {
    // Loopar igenom varje filtrerat todo och skapar ett nytt div-element för varje.
    const todoEl = document.createElement("div");
    todoEl.innerHTML = `completed: ${todo.completed}`; // Sätter innerHTML för varje div-element med "completed" status.
    todosElement.appendChild(todoEl); // Lägger till varje div-element med todo-information i det överordnade div-elementet.
  });

  console.log(data); // Loggar hela todos-datasetet till konsolen.
}

getTodos(); // Anropar funktionen för att hämta och visa todos-informationen.
