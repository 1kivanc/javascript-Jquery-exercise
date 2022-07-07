const searchInput = document.querySelector("#search-input");
const btnSearch = document.querySelector(".btn-search");
const container = document.querySelector(".container");


const pokeCount = 151;

const colors = {
    fire:"#FDDFDF",
    grass: "#DEFDE0",
    electric : "#FCF7DE",
    water :"#DEF3DF",
    ground:"#f4e7da",
    rock :"#d5d5d4",
    fairy:"#fceaff",
    poison :"#d6b3ff",
    bug:"#f8d5a3",
    dragon:"#97b3e6",
    psychic:"#eaeda1",
    flying:"#F5F5F5",
    fighting:"#E6E0D4",
    normal :"#F5F5F5",
    ice:"#e0f5ff"
    
};

const initPokemon = async () => {
    for (let i = 1; i <= pokeCount; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    createBox(data);
};

const createBox =  (pokemon) => {
    
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1) ;
    const id = pokemon.id.toString().padStart(3 , "0");
    const weight = pokemon.weight;
    const type = pokemon.types[0].type.name;
    const color = colors[type];
    

    const pokemonChar = document.createElement("div");
    pokemonChar.classList.add("box");
    pokemonChar.style.backgroundColor = `${color}`; 

    pokemonChar.innerHTML = 

    `
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${name} image">

            
            <h4 class="name">${name}</h4>
            <p class="id">#${id}</p>
            <p class="weight">${weight} Kg</p>
            <p class="type">${type}</p>
    `;

    container.appendChild(pokemonChar);
};

initPokemon();

searchInput.addEventListener('input' , function (e) {
    const pokeName = document.querySelectorAll(".name");
    const search = searchInput.value.toLowerCase();

    pokeName.forEach((pokeName) => {
        
        pokeName.parentElement.style.display = "block";
        
        if(!pokeName.innerHTML.toLowerCase().includes(search)){
            pokeName.parentElement.style.display = "none";
        }
    }) ;

})