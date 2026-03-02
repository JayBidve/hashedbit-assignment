import React from "react";
import { useParams, Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Inception", image: "https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg" },
  { id: 2, title: "Interstellar", image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
  { id: 3, title: "Avatar", image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
  { id: 4, title: "Joker", image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { id: 5, title: "Titanic", image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
  { id: 6, title: "Avengers", image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" },
  { id: 7, title: "Batman", image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { id: 8, title: "Frozen", image: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg" }
];

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie Not Found</h2>;

  return (
    <div className="details-container">
      <img src={movie.image} alt={movie.title} />
      <div className="details-content">
        <h1>{movie.title}</h1>
        <p>
          Enjoy a premium cinematic experience with stunning visuals and immersive sound.
        </p>

        <Link to={`/book/${movie.id}`}>
          <button className="book-btn">Book Seat</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieDetails;