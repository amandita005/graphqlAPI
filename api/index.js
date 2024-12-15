// backend/api/graphql.js
import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '../src/schema/typeDefs.js';
import { getMovie, getPopularMovies, getMoviesRecomendations, getMoviesGenres } from '../src/services/tmdbService.js';

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

// Exporte a função do ApolloServer configurada para ser usada como API no Vercel
export const config = {
  api: {
    bodyParser: false, // Necessário para o ApolloServer com o Vercel
  },
};

export default server.createHandler({ path: '/api/graphql' });
