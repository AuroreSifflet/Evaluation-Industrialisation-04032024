'use strict';
/**
 * Fonction asynchrone fetchPokemonAbilities()
 * qui va chercher aléatoirement un pokemon grâce au pokedexNum sur l'api pokeapi
 * et assigne sa valeur à foundAbilities
 * si un pokemon a été trouvé, foundAbilities existe,
 * récupération et mise en forme de son nom jsonAbilities.name
 * sa valeur est assignée à abilityToDisplay qui sera affichée dans le paragraphe pokeAbility
 * @returns avoid, il n'y a pas de valeur de retour
 */
const fetchPokemonAbilities = async () => {
  const pokedexNum = Math.floor(Math.random() * 266);
  let foundAbilities = '';
  const pokeAbility = document.getElementById('pokeAbility');
  let jsonAbilities;
  let abilityToDisplay = '';

  try {
    foundAbilities = await fetch(
      `https://pokeapi.co/api/v2/ability/${pokedexNum}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error.message);
  }

  if (foundAbilities) {
    try {
      jsonAbilities = await foundAbilities.json();
      if (jsonAbilities.name !== '' && undefined !== jsonAbilities.name) {
        abilityToDisplay = `${String(jsonAbilities.name).slice(0, 1).toUpperCase()}${String(jsonAbilities.name).slice(1, jsonAbilities.name.length).toLowerCase()}`;
      } else {
        abilityToDisplay = 'Tackle';
      }
    } catch (error) {
      console.error(error.message);
    }
  } else {
    pokeAbility.innerText = 'No ability found...';
  }

  if (pokeAbility.innerText !== '') {
    pokeAbility.innerText = '';
  }

  pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;
};
export default fetchPokemonAbilities;
