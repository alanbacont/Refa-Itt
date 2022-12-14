import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS, GET_USER } from "./Queries/Usuario";
import { CREATE_USER, UPDATE_PASSWORD, DELETE_USER, LOGIN, UPDATE_USER } from "./Mutations/Usuario";
import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./Mutations/Producto";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCT_BY_SLUG,
} from "./Queries/Producto";


const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER,
    getAllProducts: GET_ALL_PRODUCTS,
    getProduct: GET_PRODUCT,
    getProductBySlug: GET_PRODUCT_BY_SLUG
  },
});

const rootMutation = new GraphQLObjectType({
  name: "rootMutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
    updateUser: UPDATE_USER,
    createProduct: CREATE_PRODUCT,
    updateProduct: UPDATE_PRODUCT,
    login: LOGIN,
    deleteProduct: DELETE_PRODUCT,
  },
});

export const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});
