import { ApolloServer } from 'apollo-server';
import typeDefs from '../src/schema/typeDefs.js';
import { getMovie, getPopularMovies, getMoviesRecomendations, getMoviesGenres} from '../src/services/tmdbService.js'; // Importa ambas as funções

const resolvers = {
  Query: {
    movie: async (_, { id }) => {
      return await getMovie(id); // Usa a função getMovie
    },
    popularMovies: async () => {
      return await getPopularMovies(); // Usa a função getPopularMovies
    },
    moviesRecomendations: async (_, { id }) => {
      return await getMoviesRecomendations(id); // Usa a função getMovie
    },
    MoviesGenres: async (_, { genre }) => {
      return await getMoviesGenres(genre); // Usa a função getMovie
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

export default (req, res) => {
  return server.createHandler({
    path: '/api/graphql', // Define a URL da API GraphQL
  })(req, res);
};