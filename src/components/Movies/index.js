import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
  return (
    <div>
      {props.movies.map((movie, i) => {
        return (
          <Movie
            key={i}
            image={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
            genres={movie.genre_ids}
            date={movie.release_date}
            average={movie.vote_average}
            viewMovieInfo={props.viewMovieInfo}
            movieId={movie.id}
          />
        );
      })}
    </div>
  );
};

export default Movies;
