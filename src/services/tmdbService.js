// Usando importação dinâmica para carregar 'node-fetch'

export const getMovie = async (id) => {
  const fetch = (await import('node-fetch')).default; // Importação dinâmica
  const API_KEY = '5c449ecce11856e35d97c05f74edf083';

  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();

  const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);
  const creditsData = await creditsResponse.json();

  const director = creditsData.crew.find(person => person.job === 'Director');
  const actors = creditsData.cast.slice(0, 5); 

  return {
    id: data.id, // Adicionado o campo ID
    title: data.title,
    overview: data.overview,
    release_date: data.release_date,
    poster_path: data.poster_path,
    backdrop_path: data.backdrop_path,
    director: director ? director.name : 'Unknown', 
    actors: actors.map(actor => actor.name),
  };
};

export const getPopularMovies = async () => {
  const fetch = (await import('node-fetch')).default; // Importação dinâmica
  const API_KEY = '5c449ecce11856e35d97c05f74edf083';
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=AE&api_key=${API_KEY}`);
  const data = await response.json();

  return data.results.map((movie) => ({
    id: movie.id, // Adicionado o campo ID
    title: movie.title,
    overview: movie.overview,
    release_date: movie.release_date,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
  }));
};

export const getMoviesRecomendations = async (id) => {
  const fetch = (await import('node-fetch')).default; // Importação dinâmica
  const API_KEY = '5c449ecce11856e35d97c05f74edf083';
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1&api_key=${API_KEY}`);
  const data = await response.json();

  return data.results.map((movie) => ({
    id: movie.id, // Adicionado o campo ID
    title: movie.title,
    overview: movie.overview,
    release_date: movie.release_date,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
  }));
};

export const getMoviesGenres = async (genre) => {
  const fetch = (await import('node-fetch')).default; // Importação dinâmica
  const API_KEY = '5c449ecce11856e35d97c05f74edf083';
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&with_genres=${genre}&page=1&api_key=${API_KEY}`);
  const data = await response.json();

  return data.results.map((movie) => ({
    id: movie.id, 
    title: movie.title,
    overview: movie.overview,
    release_date: movie.release_date,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
  }));
};
