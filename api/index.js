// backend/api/graphql.js
import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '../src/schema/typeDefs.js';
import { getMovie, getPopularMovies, getMoviesRecomendations, getMoviesGenres } from '../src/services/tmdbService.js'; // Ajuste para o caminho correto

const resolvers = {
  Query: {
    movie: async (_, { id }) => {
      return await getMovie(id);
    },
    popularMovies: async () => {
      return await getPopularMovies();
    },
    moviesRecomendations: async (_, { id }) => {
      return await getMoviesRecomendations(id);
    },
    MoviesGenres: async (_, { genre }) => {
      return await getMoviesGenres(genre);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Essa linha cria a função serverless para ser executada no Vercel
export default server.createHandler({ path: '/api/graphql' });
