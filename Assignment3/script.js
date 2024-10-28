// Movie data array: Allows for easy management and updating of movie information
// This makes it easy to manage and update movie information.

// Each object represents a movie with its details
const movies = [
    {
        id: 1, // Unique identifier for each movie
        title: "The Shawshank Redemption",
        genre: "Drama",
        rating: 9.3,
        description: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
        director: "Frank Darabont",
        year: "1994",
        thumbnail: "Media/Shawshank.jpg" // Path to the movie poster image
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

// Get references to important parts of our HTML
const movieGrid = document.getElementById('movieGrid'); // Where movie cards will go
const modal = document.getElementById('movieModal'); // Modal window for details
const closeButton = modal.querySelector('.close-button'); // Button to close modal

// Create movie cards and put them onto the page
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

// Function to show detailed information in a modal when a movie is clicked
function showMovieDetails(movie) {
    modal.classList.add('active'); // Show modal
    
   // Update modal content with selected movie details
    modal.querySelector('.modal-image').src = movie.thumbnail;
    modal.querySelector('.modal-image').alt = movie.title;
    modal.querySelector('.modal-title').textContent = movie.title;
    modal.querySelector('.modal-description').textContent = movie.description;
    modal.querySelector('.modal-director').textContent = movie.director;
    modal.querySelector('.modal-genre').textContent = movie.genre;
    modal.querySelector('.modal-year').textContent = movie.year;
    modal.querySelector('.modal-rating').textContent = `${movie.rating}/10`;
}

// Event listener for clicks on the movie grid
movieGrid.addEventListener('click', (e) => { 
    const movieCard = e.target.closest('.movie-card'); // Get closest card clicked
    if (movieCard) { // If a card was clicked
        const movie = movies.find(m => m.id === parseInt(movieCard.dataset.id)); // Find the correct movie by ID
        showMovieDetails(movie); // Show its details in the modal
    }
});

// Close button functionality to hide the modal
closeButton.addEventListener('click', () => {
    modal.classList.remove('active'); // Hide modal when close button is clicked
});

// Close modal when clicking outside of its content area
// Improves user experience by providing an intuitive way to exit the modal without needing to locate the smaller exit button. 
modal.addEventListener('click', (e) => {
    if (e.target === modal) { // If clicked on the dark area outside content
        modal.classList.remove('active'); // Hide it
    }
});

// Initialize by creating all movie cards when page loads
createMovieCards();

