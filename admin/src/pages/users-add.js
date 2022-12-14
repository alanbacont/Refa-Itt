import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DashboardLayout } from "../components/dashboard-layout";
import Head from "next/head";

import { CREATE_USER } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

function Page() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipo, setTipo] = useState("Usuario");
  const [usuario, setUsuario] = useState()

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const addUser = () => {
    createUser({
      variables: {
        nombre: nombre,
        usuario: usuario,
        pass: "refa",
        email: email,
        telefono: telefono,
        tipo: tipo,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser();
    event.target.reset();
  };

  return (
    <>
      <Head>
        <title>Usuarios - Añadir Usuario</title>
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
        <h1 style={{ marginLeft: 50, marginTop: 20 }}>Añadir Usuario</h1>
        <div>
          <TextField
            id="outlined-textarea"
            label="Nombre"
            placeholder="Nombre"
            multiline
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Usuario"
            placeholder="Usuario"
            multiline
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="E-mail"
            placeholder="usuario@correo.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Teléfono"
            placeholder="xxx-xxx-xxxx"
            multiline
            onChange={(e) => {
              setTelefono(e.target.value);
            }}
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl>
              <InputLabel id="demo-simple-select-label" sx={{ marginLeft: 6 }}>Tipo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tipo}
                label="Tipo"
                onChange={(e) => {
                  setTipo(e.target.value);
                }}
                sx={{ marginLeft: 6 }}
              >
                <MenuItem value={"Usuario"}>Usuario</MenuItem>
                <MenuItem value={"Administrador"}>Administrador</MenuItem>
              </Select>
            </FormControl>
          </Box>
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
