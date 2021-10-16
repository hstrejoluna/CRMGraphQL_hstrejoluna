const { gql } = require("apollo-server");

// Schemadefs
const typeDefs = gql`
  type Usuario {
    id: ID
    nombre: String
    apellido: String
    email: String
    creado: String
  }

  input UsuarioInput {
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }

  type Query {
    obtenerCurso: String
  }

  type Mutation {
    nuevoUsuario: Usuario
  }
`;

module.exports = typeDefs;
