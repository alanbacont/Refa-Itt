import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { UserType } from "../TypeDef/Usuario";
import { MessageType } from "../TypeDef/Respuestas";

const { Usuarios } = require("../models");
const { createJWTToken } = require("../../../util/auth");

//Mutation para crear un usuario
export const CREATE_USER = {
  type: UserType,
  description: "Registrar usuario y retorno de token",
  args: {
    nombre: { type: GraphQLString },
    email: { type: GraphQLString },
    tipo: { type: GraphQLString },
    usuario: { type: GraphQLString },
    telefono: { type: GraphQLString },
    pass: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { tipo, nombre, email, usuario, pass, telefono } = args;
    const usuarios = new Usuarios({
      email,
      usuario,
    });
    const token = createJWTToken(usuarios);
    const user = await Usuarios.create({
      tipo,
      nombre,
      email,
      usuario,
      pass,
      telefono,
      token
    });

    return user;
  },
};

//Mutation para login
export const LOGIN = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    pass: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const user = await Usuarios.findOne({ email: args.email }).select("+pass");

    //console.log(user);
    if (!user || args.pass !== user.pass)
      throw new Error("Invalid Credentials");

    const token = createJWTToken(user);

    user.token = token;

    return user;
  },
};

//Mutation para cambiar contraseña
export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    usuario: { type: GraphQLString },
    currentPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { usuario, currentPassword, newPassword } = args;
    const user = await Usuarios.findOne({ usuario: usuario });
    const userPass = user?.pass;

    console.log(user);

    if (currentPassword !== userPass) {
      return {
        successful: false,
        tipo: "Error",
        message: "Las contraseñas no coinciden.",
      };
    }

    await Usuarios.updateOne({ usuario: usuario }, { pass: newPassword });
    return {
      successful: true,
      tipo: "Exitoso",
      message: "Contraseña actualizada correctamente.",
    };
  },
};

//Mutation para actualizar usuario
export const UPDATE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    email: { type: GraphQLString },
    tipo: { type: GraphQLString },
    usuario: { type: GraphQLString },
    telefono: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, tipo, nombre, email, usuario, telefono } = args;

    await Usuarios.findByIdAndUpdate(id, args);

    return {
      successful: true,
      tipo: "Exitoso",
      message: "Producto actualizada correctamente.",
    };
  },
};

//Mutation para eliminar un usuario
export const DELETE_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    await Usuarios.findOneAndDelete({ _id: args.id });
  },
};
