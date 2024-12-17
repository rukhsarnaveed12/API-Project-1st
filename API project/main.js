
       let data = fetch("https://dummyapi.online/api/movies")
            .then(response => response.json())
            .then(data => {
                const cards = data.map((movie) => {
                    return `
                        <div class="card">
                            <img src="${movie.poster_url || './movie.jpeg'}" class="card-img-top" alt="${movie.title}">
                            <div class="card-body">
                                <p class="card-text">${movie.title}</p>
                                <h6 class="card-text">${movie.rating}</h6>
                            </div>
                        </div>
                    `;
                }).join("");
                document.getElementById('card-container').innerHTML = cards;
            })
            .catch(err => {
                console.log("Error fetching data: ", err);
            });