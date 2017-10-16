import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = () => {
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>Movie Title</h3>
        <p>
          <strong>Released:</strong> {props.movieData.Year}<br />
          <strong>Directed By:</strong> {props.movieData.Director}<br />
          <em>Genre:</em> {props.movieData.imdbRating}
        </p>
        <p>{props.movieData.Plot}</p>
       

        </div>
    </section>
  );
};

export default Movie;


