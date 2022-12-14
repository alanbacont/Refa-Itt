import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

//Define el Objeto tipo Usuario
export const ProductType = new GraphQLObjectType({
  name: "Producto",
  fields: () => ({
    id: { type: GraphQLID },
    slug: { type: GraphQLString },
    nombre: { type: GraphQLString },
    precio: { type: GraphQLString },
    imagenes: { type: GraphQLString },
    badge: { type: GraphQLString },
    calificacion: { type: GraphQLInt},
    reviews: { type: GraphQLInt},
    disponibilidad: { type: GraphQLString},
    marca: { type: GraphQLString },
    categorias: { type: GraphQLString },
    atributos: { type: GraphQLString },
    descripcion: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});