// api.js
async function fetchData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
  const data = await response.json();
  return data;
}

module.exports = fetchData;
