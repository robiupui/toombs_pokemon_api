// Get the first 20 Pokemon out of the API
// This will only return the name and the url for the Pokemon
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then((response) => {
    return response.json()
  })
  // When you return response.json() (line 5), you're actually passing that INTO the next .then() function
  // So, on line 9 "allpokemon" contains the JSON data we got from the first fetch (which is just name and url)
  .then(function(allpokemon){
    // This function then will loop through the JSON data and perform a second fetch for each item (of which there are 20)
    console.log('In allpokemon function');
    // Here's the loop
    allpokemon.results.forEach(function(pokemon){
      // The console will log the statement on line 16 20 times.  You can get rid of it if you want.
      // It will also write out the URL that you are trying to fetch
      console.log('In second fetch.');
      console.log(pokemon.url);
      // This is the 2nd fetch.  It will run 20 times (once for each pokemon)
      return fetch(pokemon.url)
      .then(response => response.json())
      // Again, the response JSON is passed to the next .then() function
      // Therefore, "pokemon" on line 23 refers to one specific pokemon's data
      .then(pokemon => {
        // This is where you would add an <li> tag or something to the screen.
        console.log(pokemon.id); 
        
        // If you want to put in more detail, you can now dive deeper into the JSON structure
        console.log(pokemon.sprites.front_default);

        // And if you want to list types or abilities, you'll loop through those arrays
        console.log("Abilities:");
        pokemon.abilities.forEach(function(ability) {
          console.log(ability.ability.name);
        }) 
        console.log("Types:");
        pokemon.types.forEach(function(type) {
          console.log(type.type.name);
        }) 
      })
    })
  })
.catch((err) => {
  // Do something for an error here
})
