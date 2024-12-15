import fetch from 'node-fetch';

const API_KEY = '5c449ecce11856e35d97c05f74edf083';

export const getMovie = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();

  const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);
  const creditsData = await creditsResponse.json();

  const director = creditsData.crew.find(person => person.job === 'Director');
  const actors = creditsData.cast.slice(0, 5);

  return {
    id: data.id,
    title: data.title,
    overview: data.overview,
    release_date: data.release_date,
    poster_path: data.poster_path,
    backdrop_path: data.backdrop_path,
    director: director ? director.name : 'Unknown',
    actors: actors.map(actor => actor.name),
  };
};


