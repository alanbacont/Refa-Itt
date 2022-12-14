import { gql } from "@apollo/client";

export const LOAD_ALL_PRODUCTS = gql`
  query {
    getAllProducts {
      id
      nombre
      descripcion
      disponibilidad
      categorias
    }
  }
`;

export const LOAD_PRODUCT = gql`
  query GetProduct($id: ID) {
    getProduct(id: $id) {
      nombre
      marca
      precio
      descripcion
      imagenes
      categorias
      disponibilidad
    }
  }
`;

export const LOAD_ALL_USERS = gql`
  query {
    getAllUsers {
      nombre
      email
      usuario
      telefono
      tipo
      id
      createdAt
    }
  }
`;

export const LOAD_USER = gql`
  query GetUser($id: ID) {
    getUser(id: $id) {
      nombre
      usuario
      email
      tipo
      telefono
    }
  }
`;