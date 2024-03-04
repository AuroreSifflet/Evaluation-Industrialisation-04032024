window.addEventListener('DOMContentLoaded',()=>{
  const pokeP=document.getElementById('pokeInfo')
  const pokeDiv=document.getElementById('pokemon-info')
  const pokeAbilityBtn=document.getElementById('ability')
  
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
  const fetchPokemon=async ()=>{
    const pokedexNum=Math.floor(Math.random() * 897)
    let foundPokemon=''
    let jsonPokemon={}
    const pokeInfo={}

    try{
      foundPokemon=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexNum}`, {method: 'GET', headers: {'Content-Type': 'application/json'}})
    }
    catch(error){console.error(error.message)}
    // Si un pokemon a été trouvé création du nom pokemon pokeInfo 
    if(foundPokemon){
      try{
        jsonPokemon=await foundPokemon.json()
        pokeInfo.name=`${String(jsonPokemon.species.name).slice(0, 1).toUpperCase()}${String(jsonPokemon.species.name).slice(1, jsonPokemon.species.name.length).toLowerCase()}`
      }
      catch(error){console.error(error.message)}

    }
    else{pokeP.innerText = 'No Pokémon found...'}
    
    if(pokeP.innerText !== ''){pokeP.innerText=''}
    pokeP.innerText=`Your Pokémon is ${pokeInfo.name}.`
    pokeAbilityBtn.removeAttribute('disabled')
  }
  
  /**
   * Fonction asynchrone fetchPokemonAbilities() 
   * qui va chercher aléatoirement un pokemon grâce au pokedexNum sur l'api pokeapi 
   * et assigne sa valeur à foundAbilities
   * si un pokemon a été trouvé, foundAbilities existe, 
   * récupération et mise en forme de son nom jsonAbilities.name
   * sa valeur est assignée à abilityToDisplay qui sera affichée dans le paragraphe pokeAbility
   * 
   * @returns undefined, il n'y a pas de valeur de retour
   */
  const fetchPokemonAbilities=async()=>{
    const pokedexNum=Math.floor(Math.random() * 266)
    let foundAbilities=''
    const pokeAbility=document.getElementById('pokeAbility')
    let jsonAbilities 
    let abilityToDisplay=''
  
    try {
      foundAbilities=await fetch(`https://pokeapi.co/api/v2/ability/${pokedexNum}`, {method: 'GET', headers: {'Content-Type': 'application/json'}})
    }
    catch(error){console.error(error.message)}

    if(foundAbilities){
      try{
        jsonAbilities=await foundAbilities.json();
        if('' !== jsonAbilities.name && undefined !== jsonAbilities.name){
          abilityToDisplay=`${String(jsonAbilities.name).slice(0, 1).toUpperCase()}${String(jsonAbilities.name).slice(1, jsonAbilities.name.length).toLowerCase()}`
        }
        else{abilityToDisplay='Tackle'}
      }
      catch(error){console.error(error.message)}

    }
    else{ pokeAbility.innerText = 'No ability found...' }

    if(pokeAbility.innerText !== ''){pokeAbility.innerText=''}

    pokeAbility.innerText=`It now knows the move ${abilityToDisplay}!`
  }
  
  /**
   * Fonction anonyme invoquePokemon() 
   * qui sélectionne le bouton id pokemon
   * qui permet lors de l'événement click d'executer la fonction fetchPokemon
   * le résultat de l'execution s'affiche sur la page index.html dans la div pokemon-info
   * @returns undefined, il n'y a pas de valeur de retour
   */
  const invoquePokemon = ()=>{
    const pokeBtn=document.getElementById('pokemon')
    pokeBtn.addEventListener('click', fetchPokemon)
    pokeDiv.appendChild(pokeP)
  }

    /**
   * Fonction anonyme pokemonAbility() 
   * qui permet lors de l'événement click 
   * d'executer la fonction fetchPokemonAbilities grâce au bouton id ability de la page index.html
   * le résultat de l'execution s'affiche sur la page index.html dans la div pokemon-info
   * @returns undefined, il n'y a pas de valeur de retour
   */
  const pokemonAbility=()=>{
    pokeAbilityBtn.addEventListener('click', fetchPokemonAbilities)
    pokeDiv.appendChild(pokeAbilityBtn)
  }
  /**
   * Fonction IIFE startAll() qui exécute immédiatement au chargement du fichier fetchData.js 
   * les fonctions invoquePokemon() et pokemonAbility()
   * @returns undefined, il n'y a pas de valeur de retour
   */
  (function startAll(){
    invoquePokemon()
    pokemonAbility()
  })()
})