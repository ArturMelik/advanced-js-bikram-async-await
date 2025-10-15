//DESARROLLA AQUI TUS SOLUCIONES

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}

//1.- Declara una función **getRandomPokemon** que retorne un pokemon aleatorio.

async function getRandomPokemon(){
    
    let randomPokemon = Math.floor(Math.random() * 1301);

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`);

    let data = await response.json(); 
    
    return data;
}

getRandomPokemon().then(pokemon => {
  console.log(pokemon); 
});

//3.- Declara una funcion **printImageAndName** que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:

// html
// <section>
//     <img src="url de imagen" alt="nombre del pokemon">
//     <h1>Nombre del pokemon</h1>
// </section>


async function printImageAndName(pokemonName) {
    const name =  pokemonName || "pikachu";
    
    try{
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        let data = await response.json();
        let html =
        `<section>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <h1>${data.name}</h1>
        </section>
        `;

        return html

  
 }  catch(error) {
        console.log("Error muy malo", error);
 }
};




 //44.- Declara una función **getRandomDogImage** que retorne la url de la imagen de un perro aleatorio.

async function getRandomDogImage(){
    try{
        let response = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await response.json();

        return data.message

    } catch(error){
        console.log("Error imagen:", error)
        
    }
}

//5.- Declara una función **getRandomPokemonImage** que retorne la url de la imagen de un pokemon aleatorio.

async function getRandomPokemonImage() {

    
    try{

        let imagePokemon = Math.floor(Math.random() * 1301)
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${imagePokemon}`)
        let data = await response.json();

        return data.sprites.front_default;


    } catch(error){
        console.log("Error imagen:", error)
    }
    
}

//6.- Declara una función **printPugVsPikachu** que pinte la batalla entre "Pug" y "Pikachu" (no se testea).

async function printPugVsPikachu() {


    try{

        let dogResponse = await fetch('https://dog.ceo/api/breed/pug/images/random');
        let dogData = await dogResponse.json();
        let pugName = "Pug";
        let pugImage = dogData.message;

        let pokemonResponse = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        let pokemonData = await pokemonResponse.json();
        let pikachuName = pokemonData.name;

        console.log(`${pugName}  VS   ${pikachuName} `);

    }
    
 catch(error){
    console.log("Error:", error);
    }

}

//Ejercicio 7.- Declara una función **getRandomCharacter** que retorne un personaje aleatorio.

async function getRandomCharacter() {
    
    try{
        const personajeRandom = Math.floor(Math.random() * 825) + 1
        
        let response = await fetch(`https://rickandmortyapi.com/api/character/${personajeRandom}`)
        let dataCharacter = await response.json();

        return dataCharacter;
        
    }
    
 catch(error){
    console.log("Error:", error)
    }

}

//Ejercicio 8.- Declara una función **getRandomCharacterInfo** que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})

async function getRandomCharacterInfo() {
    try{
    const personajeRandom = Math.floor(Math.random() * 826) + 1

    let response = await fetch (`https://rickandmortyapi.com/api/character/${personajeRandom}`);
    let data = await response.json();


    let img = data.image;
    let name = data.name;
    let episodes = data.episode.length
        // ahora accedemos al episode
    let episodeResponse = await fetch (data.episode[0])
    let episodeData =  await episodeResponse.json();

    let firstEpisode = episodeData.name;
    let dateEpisode = episodeData.air_date;

    return {
        img, name, episodes, firstEpisode, dateEpisode
    }
}catch(error){
    console.log("error", error)
    }

}

 getRandomCharacterInfo().then(data => console.log(data));