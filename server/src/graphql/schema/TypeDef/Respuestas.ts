import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";

//Define el Objeto tipo error
export const MessageType = new GraphQLObjectType({
  name: "Mensaje",
  fields: () => ({
    successful: { type: GraphQLBoolean },
    tipo: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
});
