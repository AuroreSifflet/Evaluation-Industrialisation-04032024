'use strict';

import fetchPokemon from './fetchPokemon.js';
import fetchPokemonAbilities from './fetchPokemonAbilities.js';

window.addEventListener('DOMContentLoaded', () => {
  const pokeDiv = document.getElementById('pokemon-info');
  const pokeP = document.getElementById('pokeInfo');
  const pokeAbilityBtn = document.getElementById('ability');
  const pokeAbility = document.getElementById('pokeAbility');

  /**
   * Fonction anonyme invoquePokemon()
   * qui sélectionne le bouton id pokemon
   * qui permet lors de l'événement click d'executer la fonction fetchPokemon
   * le résultat de l'execution s'affiche sur la page index.html dans la div pokemon-info
   * @returns undefined, il n'y a pas de valeur de retour
   */
  const invoquePokemon = () => {
    const pokeBtn = document.getElementById('pokemon');
    pokeBtn.addEventListener('click', fetchPokemon);
    pokeDiv.appendChild(pokeP);
  };
  /**
   * Fonction anonyme pokemonAbility()
   * qui permet lors de l'événement click
   * d'executer la fonction fetchPokemonAbilities grâce au bouton id ability de la page index.html
   * le résultat de l'execution s'affiche sur la page index.html dans la div pokemon-info
   * @returns undefined, il n'y a pas de valeur de retour
   */
  const pokemonAbility = () => {
    pokeAbilityBtn.addEventListener('click', fetchPokemonAbilities);
    pokeDiv.appendChild(pokeAbility);
  };
  /**
   * Fonction IIFE startAll() qui exécute immédiatement au chargement du fichier fetchData.js
   * les fonctions invoquePokemon() et pokemonAbility()
   * @returns undefined, il n'y a pas de valeur de retour
   */
  (function startAll() {
    invoquePokemon();
    pokemonAbility();
  })();
});
