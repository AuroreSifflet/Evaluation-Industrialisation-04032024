'use strict';
/**
 * Fonction asynchrone fetchPokemon()
 * qui va chercher aléatoirement un pokemon grâce au pokedexNum sur l'api pokeapi
 * et assigne sa valeur à foundPokemon
 * si foundPokemon existe, création de son nom, sa valeur est assignée à pokeInfo.name
 * si le paragraphe p pokeP n'est pas vide, alors on le vide,
 * avant d'ajouter le texte 'Your Pokémon is' avec le nom du pokemon pokeInfo.name
 * enfin il retire l'attribut disabled au bouton pokeAbilityBtn
 * @returns undefined, il n'y a pas de valeur de retour
*/
const fetchPokemon = async () => {
  const pokeP = document.getElementById('pokeInfo');
  const pokeAbilityBtn = document.getElementById('ability');
  const pokedexNum = Math.floor(Math.random() * 897);
  let foundPokemon = '';
  let jsonPokemon = {};
  const pokeInfo = {};

  try {
    foundPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error.message);
  }
  // Si un pokemon a été trouvé création du nom pokemon pokeInfo
  if (foundPokemon) {
    try {
      jsonPokemon = await foundPokemon.json();
      pokeInfo.name = `${String(jsonPokemon.species.name).slice(0, 1).toUpperCase()}${String(jsonPokemon.species.name).slice(1, jsonPokemon.species.name.length).toLowerCase()}`;
    } catch (error) {
      console.error(error.message);
    }
  } else {
    pokeP.innerText = 'No Pokémon found...';
  }

  if (pokeP.innerText !== '') {
    pokeP.innerText = '';
  }
  pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
  pokeAbilityBtn.removeAttribute('disabled');
};
export default fetchPokemon;
