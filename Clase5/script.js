function getCharacters(done){
    const result = fetch("https://rickandmortyapi.com/api/character");

    result.then(response => response.json())
          .then(data => {
              done(data);
          })
          .catch(error => {
              console.error("Error fetching characters:", error);
          });
}

getCharacters(data =>{
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(`
            <article>
                <div class="image-container">
                    <img src="${personaje.image}" alt="${personaje.name}" class="character-image">
                </div>
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>
            </article>
        `);

        const main = document.querySelector("main");
        main.append(article);
    });
});