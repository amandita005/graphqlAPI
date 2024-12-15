const tmdbService = require('../services/tmdbService');

const movieResolver = {
  Query: {
    movie: async (_, { id }) => {
      return await tmdbService.getMovie(id); 
    },
    popularMovies: async() => {
      return await tmdbService.getPopularMovies();
    },
    moviesRecomendations: async() => {
      return await tmdbService.getMoviesRecomendations();
    },
    MoviesGenres: async() => {
      return await tmdbService.getMoviesGenres();
    }
    
  }
};

export default movieResolver;
