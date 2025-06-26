function getCharacters(done){
    const url = "https://rickandmortyapi.com/api/character?page=2";
    fetch(url)
        .then(response => response.json())
        .then(data => {
        done(data);
        })
        .catch(error => console.error('Error fetching characters:', error));
}

getCharacters(data =>{
    data.results.forEach(personajes => {
        const article = document.createRange().createContextualFragment(`
            <article>
                <div class="image-container">
                    <img src="${personajes.image}" alt="${personajes.name}" class="character-image">
                </div>
                <h3>Personaje: ${personajes.name}</h3>
                <p>Status: ${personajes.status}</p>
                <p>Species: ${personajes.species}</p>
                <p>Type: ${personajes.type}</p>
            </article>
        `);

        const main = document.querySelector("main");
        main.append(article);
    })
});