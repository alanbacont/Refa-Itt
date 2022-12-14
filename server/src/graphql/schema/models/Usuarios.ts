import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Email inválido"],
    },
    tipo: {
      type: String,
      required: true,
    },
    usuario: {
      type: String,
      required: true,
      unique: true,
    },
    telefono: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        "Teléfono inválido",
      ],
    },
    pass: {
      type: String,
      required: true,
      select: false,
    },
    token: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    collection: "Usuarios",
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Usuarios", UserSchema);
