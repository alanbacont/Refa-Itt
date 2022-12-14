import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";

const { connectDB } = require("./db/index");
const { Usuario, Producto, Respuesta } = require("./graphql/schema/TypeDef");
const {
  mutationUsuario,
  mutationProducto,
} = require("./graphql/schema/Mutations");
const { queryUsuario, queryProducto } = require("./graphql/schema/Queries");

const main = async () => {
  //Conexión a la BD
  //await connection.initialize();

  await connectDB();

  //Instancia de la app
  const app = express();
  
  const apolloServer = new ApolloServer({
    typeDefs: [Usuario, Producto, Respuesta],
    resolvers: [mutationUsuario, mutationProducto, queryUsuario, queryProducto],
    schema: schema,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app }); 

  app.get("/", (req, res) => {
    res.send("REFACCIONARIA RUIZ API");
  });

  //Middleware
  app.use(cors());
  app.use(express.json());
  
  /*
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );*/

  app.use("/static", express.static("public"));

  //Crear el servidor
  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

//Corre la app y checa si hay errores
main().catch((err) => {
  console.log(err);
});
