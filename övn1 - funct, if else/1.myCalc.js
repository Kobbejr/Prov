// 1.1 Skriv funktionerna som anropas i myCalculator så att
// myCalculator kan fungera.

// En funktion 'myAddFunction' som tar två parametrar (n1 och n2) och returnerar deras summa.
function myAddFunction(n1, n2) {
  return n1 + n2;
}

// En funktion 'mySubtractFunction' som tar två parametrar (n1 och n2) och returnerar deras differens.
function mySubtractFunction(n1, n2) {
  return n1 - n2;
}

// En funktion 'myMultiplyFunction' som tar två parametrar (n1 och n2) och returnerar deras produkt.
function myMultiplyFunction(n1, n2) {
  return n1 * n2;
}

// En funktion 'myDivisionFunction' som tar två parametrar (n1 och n2) och returnerar deras kvot.
function myDivisionFunction(n1, n2) {
  return n1 / n2;
}

// 1.2 Gör om myCalculator så att den använder if och else

// En funktion 'myCalculator' som tar tre parametrar: 'operator', 'num1', och 'num2'.
function myCalculator(operator, num1, num2) {
  // En serie av if-else if-satser för att välja rätt beräkningsfunktion baserat på operatören.

  // Om operatören är addition ("+"), anropas 'myAddFunction' med num1 och num2.
  if (operator == "+") {
    return myAddFunction(num1, num2);
  }
  // Om operatören är subtraktion ("-"), anropas 'mySubtractFunction' med num1 och num2.
  else if (operator == "-") {
    return mySubtractFunction(num1, num2);
  }
  // Om operatören är multiplikation ("*"), anropas 'myMultiplyFunction' med num1 och num2.
  else if (operator == "*") {
    return myMultiplyFunction(num1, num2);
  }
  // Om operatören är division ("/"), anropas 'myDivisionFunction' med num1 och num2.
  else if (operator == "/") {
    return myDivisionFunction(num1, num2);
  }
  // Om ingen av de kända operatorerna matchar, returneras ett felmeddelande.
  else {
    return "Error: Operator not found!";
  }
}

// Använder 'myCalculator' för att utföra olika beräkningar och lagrar resultaten i variabler.
const result = myCalculator("+", 2, 3);
const result1 = myCalculator("-", 2, 3);
const result2 = myCalculator("*", 2, 3);
const result3 = myCalculator("/", 2, 3);

// Loggar resultaten från beräkningarna till konsolen.
console.log(result, result1, result2, result3);

// ETT ANNAT SÄTT ATT GÖRA KALKYLATORN PÅ:

// function myCalculator(operator, num1, num2) {
// switch (operator) {
//   case "+":
//     return myAddFunction(num1, num2);

//   case "-":
//     return mySubtractFunction(num1, num2);

//   case "*":
//     return myMultiplyFunction(num1, num2);

//   case "/":
//     return myDivisionFunction(num1, num2);

//   default:
//     return "Error operator not found!";
// }
