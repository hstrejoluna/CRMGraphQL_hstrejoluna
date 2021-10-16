// Resolvers
const resolvers = {
  Query: { 
      obtenerCurso: () => "Algo"
  },
  Mutation : {
    nuevoUsuario: (_, {input} ) => {
      console.log(input);
      return "Usuario creado";
    }
  }
};
module.exports = resolvers;
