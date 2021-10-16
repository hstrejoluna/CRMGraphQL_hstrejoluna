const { gql } = require("apollo-server");

// Schemadefs
const typeDefs = gql`
  type Query {
    obtenerCurso: String 
  }
`;

module.exports = typeDefs;
