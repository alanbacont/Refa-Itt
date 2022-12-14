import { GraphQLID, GraphQLList } from "graphql";
import { ProductType } from "../TypeDef/Producto";

const { Productos } = require("../models");

export const GET_ALL_PRODUCTS = {
  type: new GraphQLList(ProductType),
  async resolve() {
    return await Productos.find();
  },
};

export const GET_PRODUCT = {
  type: ProductType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    return await Productos.findById(args.id);
  },
};

export const GET_PRODUCT_BY_SLUG = {
  type: ProductType,
  args: {
    slug: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    const { slug } = args;
    return await Productos.findOne({ slug });
  },
};
