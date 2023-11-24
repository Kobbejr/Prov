// 9.1 (2p) Skapa ett nytt objekt state2
// Det nya objektet ska updatera value till 20 och
// Du får bara använda spread operatorn ...

// Skapar ett objekt 'state' med två egenskaper: 'list' och 'value'.
const state = {
  list: [1, 2, 3],
  value: 10,
};

// Skapar ett nytt objekt 'state2' genom att kopiera alla egenskaper från 'state'
// och ändra värdet på 'value' till 20.
const state2 = { ...state, value: 20 };

// Loggar det uppdaterade objektet 'state2' till konsolen.
console.log(state2);

// 9.2 (2p) Skriv klart funktionen updateState
// som ska uppdatera list med newList på objektet state.
// Du måste använda spread operatorn ...

// En funktion 'updateState' som tar ett befintligt 'state'-objekt, en ny lista 'newList',
// och returnerar ett nytt objekt med uppdaterad 'list' och 'value'.
function updateState(state, newList) {
  return { ...state, list: newList, value: 20 };
}

// Skapar ett nytt objekt 'state' genom att använda 'updateState'-funktionen med en ny lista [4, 5, 6].
console.log(updateState(state, [4, 5, 6]));
