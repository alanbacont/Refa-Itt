import { GraphQLID, GraphQLList } from "graphql";
import { UserType } from "../TypeDef/Usuario";

const { Usuarios } = require("../models");

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  async resolve() {
    return await Usuarios.find();
  },
};

export const GET_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    return await Usuarios.findById(args.id);
  },
};
