import React from 'react';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt='movie' />
        <div clasName="overlay d-flex align-itens-center justify content-center"></div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
