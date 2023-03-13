console.clear();

//! Defining the Variables

const container = document.querySelector(".container");
const btn = document.querySelector("button");
const input = document.querySelector("input");

//! Function for fetching data from API

const getPokemonByName = () => {
  const userInput = input.value.toLowerCase();
  //
  fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong bro, try again :(");
      }
    })

    .then((data) => {
      renderCard(data);
      console.log(data);
    })
    .catch(() => {
      console.log("Something went wrong bro, try again :(");
      alert(`Pokemon "${userInput}" was not found, try again :(`);
    });
};

//! Function for rendering the Pokemon Card, if the response from server was ok

const renderCard = (input) => {
  container.innerHTML = card(input);
};

//! Function for generating the actual Pokemon Card

const card = (input) => {
  console.log(input);
  container.style.display = "block";

  return `<div class="pokemon-name">
              ${input.name.toUpperCase()}
              </div>
              <div class="img-container">
                  <img src="${
                    input.sprites.other.dream_world.front_default
                  }" alt="${input.name}">
              </div>

              <p id="stats">stats</p>
              <div class="stats-container">
                    <div class="hp">${input.stats[0].stat.name}</div>
                    <div class="hp-value">${input.stats[0].base_stat}</div>
                    <div class="attack">${input.stats[1].stat.name}</div>
                    <div class="attack-value">${input.stats[1].base_stat}</div>
                    <div class="defense">${input.stats[2].stat.name}</div>
                    <div class="defense-value">${input.stats[2].base_stat}</div>
                    <div class="special-attack">${
                      input.stats[3].stat.name
                    }</div>
                    <div class="special-attack-value">${
                      input.stats[3].base_stat
                    }</div>
                    <div class="special-defense">${
                      input.stats[4].stat.name
                    }</div>
                    <div class="special-defense-value">${
                      input.stats[4].base_stat
                    }</div>
                    <div class="speed">${input.stats[5].stat.name}</div>
                    <div class="speed-value">${input.stats[5].base_stat}</div>
              </div>

              <p id="abilities">abilities</p>
              <div class="abilities-container">
                    <div>${input.abilities[0].ability.name}</div>
                    <div>${input.abilities[1].ability.name}</div>
          </div>

          `;
};

//! Button click to populate the result

btn.addEventListener("click", (e) => {
  e.preventDefault(); // To prevent the default behavior of submit button

  if (input && input.value) {
    getPokemonByName();
  } else {
    alert("Please enter a Pokemon name!");
  }
});

// console.log(
//   fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
//     .then((response) => response.json())
//     .then((value) => console.log(value.sprites.other.dream_world.front_default))
// );
