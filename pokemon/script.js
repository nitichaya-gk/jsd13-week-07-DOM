const progressX = document.getElementById('progressX');
const btnPokemon = document.getElementById('btn-pokemon');

let cardCount = 0; 

btnPokemon.addEventListener('click', async () => {
    const randomId = Math.floor(Math.random() * 151) + 1;

    const findPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await findPokemon.json();
    console.log(data);

    cardCount++;
    const cardClass = `pokemon-card-${cardCount}`;

    
    const card = document.createElement('div');
    card.classList.add('pokemon-card', cardClass);

    
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-delete');
    btnDelete.textContent = '✕';
    btnDelete.addEventListener('click', () => {
        card.remove();
    });

    
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    img.alt = data.name;

    
    const name = document.createElement('h3');
    name.textContent = data.name;

    
    card.append(btnDelete, img, name);
    progressX.append(card);
});