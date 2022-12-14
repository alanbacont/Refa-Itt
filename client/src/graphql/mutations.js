/* eslint-disable */

import { gql } from "@apollo/client";

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
      email
      usuario
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