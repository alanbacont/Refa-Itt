import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DashboardLayout } from "../components/dashboard-layout";
import Head from "next/head";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import { CREATE_PRODUCT_MUTATION } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

function Page() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [marca, setMarca] = useState("");
  const [categorias, setCategorias] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState("");

  const [createProduct, {data, loading, error }] = useMutation(CREATE_PRODUCT_MUTATION);

  const addProduct = () => {

    createProduct({
      variables: {
        nombre: nombre,
        marca: marca,
        precio: precio,
        categorias: categorias,
        descripcion: descripcion,
        disponibilidad: stock,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    addProduct();
    event.target.reset();
  };

  return (
    <>
      <Head>
        <title>Productos - Añadir Producto</title>
      </Head>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 6, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1 style={{ marginLeft: 50, marginTop: 20 }}>Añadir Producto</h1>
        <div>
          <TextField
            id="outlined-textarea"
            label="Nombre"
            placeholder="Producto"
            multiline
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Precio"
            placeholder="$00.00"
            onChange={(e) => {
              setPrecio(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Marca"
            placeholder="Marca"
            multiline
            onChange={(e) => {
              setMarca(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Categoria"
            placeholder="Categoria"
            multiline
            onChange={(e) => {
              setCategorias(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Stock"
            placeholder="Stock"
            multiline
            onChange={(e) => {
              setStock(e.target.value);
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Descripción"
            multiline
            rows={6}
            placeholder="Ingresa la descripción del producto"
            onChange={(e) => {
              setDescripcion(e.target.value);
            }}
          />
          <label m={100}>Imagen</label>
          <IconButton aria-label="delete" size="large">
            <AddIcon fontSize="inherit" />
          </IconButton>
        </div>
        <Stack direction="row" spacing={50} m={6}>
          <Button variant="outlined" href="products">
            Cancelar
          </Button>
          <Button variant="contained" type="submit">
            Añadir
          </Button>
        </Stack>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
