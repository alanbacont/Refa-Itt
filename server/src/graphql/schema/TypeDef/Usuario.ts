import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

//Define el Objeto tipo Usuario
export const UserType = new GraphQLObjectType({
  name: "Usuario",
  fields: () => ({
    id: { type: GraphQLID },
    tipo: { type: GraphQLString },
    nombre: { type: GraphQLString },
    email: { type: GraphQLString },
    usuario: { type: GraphQLString },
    pass: { type: GraphQLString },
    telefono: { type: GraphQLString },
    token: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});
