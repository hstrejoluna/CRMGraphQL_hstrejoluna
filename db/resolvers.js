// Resolvers
const resolvers = {
  Query: { 
      obtenerCurso: () => "Algo"
  },
  Mutation : {
    nuevoUsuario: () => "Creando nuevo Usuario"
  }
};
module.exports = resolvers;
