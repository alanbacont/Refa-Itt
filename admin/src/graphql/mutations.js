import { gql } from "@apollo/client";

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProduct(
    $nombre: String
    $marca: String
    $precio: String
    $categorias: String
    $descripcion: String
    $disponibilidad: String
  ) {
    createProduct(
      nombre: $nombre
      marca: $marca
      precio: $precio
      categorias: $categorias
      descripcion: $descripcion
      disponibilidad: $disponibilidad
    ) {
      nombre
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: String
    $nombre: String
    $precio: String
    $marca: String
    $categorias: String
    $descripcion: String
    $disponibilidad: String
  ) {
    updateProduct(
      id: $id
      nombre: $nombre
      precio: $precio
      marca: $marca
      categorias: $categorias
      descripcion: $descripcion
      disponibilidad: $disponibilidad
    ) {
      successful
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $nombre: String
    $usuario: String
    $pass: String
    $email: String
    $telefono: String
    $tipo: String
  ) {
    createUser(
      nombre: $nombre
      usuario: $usuario
      pass: $pass
      email: $email
      telefono: $telefono
      tipo: $tipo
    ) {
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: String
    $nombre: String
    $usuario: String
    $tipo: String
    $telefono: String
    $email: String
  ) {
    updateUser(
      id: $id
      nombre: $nombre
      usuario: $usuario
      tipo: $tipo
      telefono: $telefono
      email: $email
    ) {
      successful
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID){
    deleteUser(id: $id){
      id
    }
  }
`;