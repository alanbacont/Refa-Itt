import { GraphQLID, GraphQLInt, GraphQLString, GraphQLFloat } from "graphql";
import { ProductType } from "../TypeDef/Producto";
import { MessageType } from "../TypeDef/Respuestas";

const { Productos } = require("../models");

//Mutation para crear un usuario
export const CREATE_PRODUCT = {
  type: ProductType,
  description: "Registrar usuario",
  args: {
    slug: { type: GraphQLString },
    nombre: { type: GraphQLString },
    precio: { type: GraphQLString },
    imagenes: { type: GraphQLString },
    badge: { type: GraphQLString },
    calificacion: { type: GraphQLInt },
    reviews: { type: GraphQLInt },
    disponibilidad: { type: GraphQLString },
    marca: { type: GraphQLString },
    categorias: { type: GraphQLString },
    atributos: { type: GraphQLString },
    descripcion: { type: GraphQLString }
  },
  async resolve(parent: any, args: any) {
    const {
      slug,
      nombre,
      precio,
      imagenes,
      badge,
      calificacion,
      reviews,
      disponibilidad,
      marca,
      categorias,
      atributos,
      descripcion
    } = args;
    await Productos.create({
      slug,
      nombre,
      precio,
      imagenes,
      badge,
      calificacion,
      reviews,
      disponibilidad,
      marca,
      categorias,
      atributos,
      descripcion
    });
    return args;
  },
};

//Mutation para actualizar producto
export const UPDATE_PRODUCT = {
  type: MessageType,
  args: {
    id: { type: GraphQLString },
    slug: { type: GraphQLString },
    nombre: { type: GraphQLString },
    precio: { type: GraphQLString },
    imagenes: { type: GraphQLString },
    badge: { type: GraphQLString },
    calificacion: { type: GraphQLInt },
    disponibilidad: { type: GraphQLString },
    marca: { type: GraphQLString },
    categorias: { type: GraphQLString },
    atributos: { type: GraphQLString },
    descripcion: { type: GraphQLString }
  },
  async resolve(parent: any, args: any) {
    const {
      id,
      slug,
      nombre,
      precio,
      imagenes,
      badge,
      calificacion,
      disponibilidad,
      marca,
      categorias,
      atributos,
      descripcion
    } = args;

    await Productos.findByIdAndUpdate(id, args)

    return {
      successful: true,
      tipo: "Exitoso",
      message: "Producto actualizada correctamente.",
    };
  },
};

//Mutation para eliminar un usuario
export const DELETE_PRODUCT = {
  type: ProductType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    await Productos.findOneAndDelete({_id: args.id});
  },
}; 
