const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        genre: "Drama",
        rating: 9.3,
        description: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
        director: "Frank Darabont",
        year: "1994",
        thumbnail: "Media/Shawshank.jpg"
    },
    {
        id: 2,
        title: "The Godfather",
        genre: "Crime",
        rating: 9.2,
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        director: "Francis Ford Coppola",
        year: "1972",
        thumbnail: "Media/Godfather.jpg"
    },
    {
        id: 3,
        title: "The Dark Knight",
        genre: "Action Epic",
        rating: 9.0,
        description: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
        director: "Christopher Nolan",
        year: "2008",
        thumbnail: "Media/Darkknight.jpg"
    },
    {
        id: 4,
        title: "The Godfather Part II",
        genre: "Drama",
        rating: 9.0,
        description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        director: "Francis Ford Coppola",
        year: "1974",
        thumbnail: "Media/Godfather2.jpg"
    },
    {
        id: 5,
        title: "12 Angry Men",
        genre: "Legal Drama",
        rating: 9.0,
        description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        director: "Sidney Lumet",
        year: "1957",
        thumbnail: "Media/12angrymen.jpg"
    },
    {
        id: 6,
        title: "The Lord of the Rings: The Return of the King",
        genre: "Epic Fantasy",
        rating: 9.0,
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        director: "Peter Jackson",
        year: "2003",
        thumbnail: "Media/lotrreturn.jpg"
    },
    {
        id: 7,
        title: "Schindler's List",
        genre: "Drama",
        rating: 9.0,
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        director: "Steven Spielberg",
        year: "1993",
        thumbnail: "Media/schindler.jpg"
    },
    {
        id: 8,
        title: "Pulp Fiction",
        genre: "Dark Comedy",
        rating: 8.9,
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        director: "Quentin Tarantino",
        year: "1994",
        thumbnail: "Media/pulpfiction.jpg"
    },
];

// DOM Elements
const movieGrid = document.getElementById('movieGrid');
const modal = document.getElementById('movieModal');
const closeButton = modal.querySelector('.close-button');

// Create movie cards
function createMovieCards() {
    movieGrid.innerHTML = movies.map(movie => `
        <div class="movie-card" data-id="${movie.id}">
            <img src="${movie.thumbnail}" alt="${movie.title}">
            <div class="movie-overlay">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-genre">${movie.genre}</p>
                <div class="movie-rating">
                    <span>★</span>
                    <span>${movie.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Show movie details in modal
function showMovieDetails(movie) {
    modal.classList.add('active');
    
    // Update modal content
    modal.querySelector('.modal-image').src = movie.thumbnail;
    modal.querySelector('.modal-image').alt = movie.title;
    modal.querySelector('.modal-title').textContent = movie.title;
    modal.querySelector('.modal-description').textContent = movie.description;
    modal.querySelector('.modal-director').textContent = movie.director;
    modal.querySelector('.modal-genre').textContent = movie.genre;
    modal.querySelector('.modal-year').textContent = movie.year;
    modal.querySelector('.modal-rating').textContent = `${movie.rating}/10`;
}

// Event Listeners
movieGrid.addEventListener('click', (e) => {
    const movieCard = e.target.closest('.movie-card');
    if (movieCard) {
        const movie = movies.find(m => m.id === parseInt(movieCard.dataset.id));
        showMovieDetails(movie);
    }
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Initialize
createMovieCards();

