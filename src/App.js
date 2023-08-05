
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/MovieList.js';

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([])
  const getMovieRequest = async() => {
   const url = "https://www.omdbapi.com/?s=avengers&apikey=9d31e322"
    const response = await fetch (url);
    const responseJson = await response.json();
    
    console.log(responseJson);
    setMovies(responseJson.Search);
  };
  useEffect(() => {
    getMovieRequest();
  }, []);
  
  return (
    <div className= 'container-fluid movie-app'>
      <div className='row'>
      <MovieList movies={movies} />
    </div>
    </div>
  );
};

export default App;
