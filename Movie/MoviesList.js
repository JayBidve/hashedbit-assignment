import React from "react";
import { Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Inception", image: "https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg" },
  { id: 2, title: "Interstellar", image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
  { id: 3, title: "Avatar", image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
  { id: 4, title: "Joker", image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { id: 5, title: "Titanic", image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
  { id: 6, title: "Avengers", image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" },
  { id: 7, title: "Batman", image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { id: 8, title: "Frozen", image: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg" },
  { id: 9, title: "Matrix", image: "https://image.tmdb.org/t/p/w500/aoi2QkU7gFNT4o0jXKOTVn99dVd.jpg" },
  { id: 10, title: "Thor", image: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg" },
  { id: 11, title: "Gladiator", image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
  { id: 12, title: "Spider-Man", image: "https://image.tmdb.org/t/p/w500/fwoETElxZ7WYp0x3Yv5F4qZXM3aIGCOYQ.jpg" },
  { id: 13, title: "Doctor Strange", image: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg" },
  { id: 14, title: "Black Panther", image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
  { id: 15, title: "Lion King", image: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg" },
  { id: 16, title: "Mission Impossible", image: "https://image.tmdb.org/t/p/w500/8b6hNKFJzYkO8nQ8p2eFQ5F7Fv0.jpg" }
];

function MoviesList() {
  return (
    <div className="main-container">
      <h1 className="title">🎬 Book Your Movie</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />

            <div className="overlay">
              <h3>{movie.title}</h3>

              <Link to={`/movie/${movie.id}`}>
                <button className="book-btn">
                  View Details
                </button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;