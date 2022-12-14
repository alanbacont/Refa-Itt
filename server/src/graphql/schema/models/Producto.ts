import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    slug: {
      type: String,
    },
    nombre: {
      type: String,
      required: true,
    },
    precio: {
      type: String,
    },
    imagenes: {
      type: String,
    },
    badge: {
      type: String,
    },
    calificacion: {
      type: Number,
    },
    reviews: {
        type: Number,
    },
    disponibilidad: {
        type: String,
    },
    marca: {
        type: String,
        required: true
    },
    categorias: {
        type: String,
        required: true
    },
    atributos: {
        type: String,
    },
    descripcion: {
      type: String,
      require: true
    }
  },
  {
    collection: "Productos",
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Productos", ProductSchema);
