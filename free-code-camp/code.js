function convertCtoF(celsius) {
  // Konverterar Celsius till Fahrenheit med hjälp av formeln (Celsius * 9/5) + 32.
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log(convertCtoF(30)); // Konverterar 30 grader Celsius till Fahrenheit och loggar resultatet.

function reverseString(str) {
  // Inverterar strängen genom att loopa baklänges genom varje tecken.
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

reverseString("hello"); // Inverterar strängen "hello" (resultatet returneras men inte loggas).

function factorialize(num) {
  // Beräknar faktoriell av ett givet nummer.
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

function findLongestWordLength(str) {
  // Hittar längden på det längsta ordet i en sträng.
  const arr = str.split(" ");

  let longestWord = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }

  return longestWord;
}

// Hittar det högsta värdet i en array.
function getHighestNum(arr) {
  let highest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }
  return highest;
}

function largestOfFour(arr) {
  // Hittar det högsta värdet i varje subarray och returnerar dem som en ny array.
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    const highest = getHighestNum(subArr);
    resultArr.push(highest);
  }

  return resultArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
); // Hittar de högsta värdena i varje subarray och loggar resultatet.
