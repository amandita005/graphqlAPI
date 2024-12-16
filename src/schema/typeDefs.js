import { gql } from 'apollo-server';  

const typeDefs = gql`
  type Movie {
    id: ID!                 # Campo ID obrigatório
    title: String
    overview: String
    release_date: String
    poster_path: String
    backdrop_path: String
    director: String       # Novo campo para o nome do diretor
    actors: [String]    
  }

  type Query {
    movie(id: ID!): Movie
    popularMovies: [Movie]
    moviesRecomendations(id: ID!): [Movie]
    MoviesGenres(genre: String): [Movie]
  }
`;

export default typeDefs;
