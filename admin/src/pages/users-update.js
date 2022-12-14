import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DashboardLayout } from "../components/dashboard-layout";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useQuery, gql, useMutation } from "@apollo/client";
import { LOAD_USER } from "../graphql/queries";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UPDATE_USER, DELETE_USER } from "../graphql/mutations";

function Page() {
  const router = useRouter();
  const dataR = router.query;
  const userId = dataR.id;

  const { data } = useQuery(LOAD_USER, {
    variables: { id: userId },
  });

  const [user, setUser] = useState({});
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipo, setTipo] = useState("");
  const [open, setOpen] = useState(false);

  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);

  useEffect(() => {
    if (data) {
      setUser(data.getUser);
      setNombre(user.nombre);
      setEmail(user.email);
      setUsuario(user.usuario);
      setTelefono(user.telefono);
      setTipo(user.tipo);
    }
  }, [data]);

  const update = () => {
    updateUser({
      variables: {
        id: userId,
        nombre: nombre,
        email: email,
        usuario: usuario,
        telefono: telefono,
        tipo: tipo,
      },
    });
  };

  const deleteU = () => {
    deleteUser({
      variables: {
        id: userId,
      },
    });
  };

  const handleSubmit = () => {
    update();
    router.push("/users");
  };

  const handleDelete = (event) => {
    deleteU();
    router.push("/users");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 6, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1 style={{ marginLeft: 50, marginTop: 20 }}>Modificar Usuario</h1>
        <div>
          <TextField
            id="outlined-textarea"
            label="Nombre"
            defaultValue={user.nombre}
            multiline
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Usuario"
            defaultValue={user.usuario}
            multiline
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Email"
            defaultValue={user.email}
            multiline
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Teléfono"
            defaultValue={user.telefono}
            multiline
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setTelefono(e.target.value);
            }}
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl>
              <InputLabel id="demo-simple-select-label" sx={{ marginLeft: 6 }}>
                Tipo
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={user.tipo}
                label="Tipo"
                onChange={(e) => {
                  setTipo(e.target.value);
                }}
                sx={{ marginLeft: 6, minWidth: 120 }}
              >
                <MenuItem value={"Usuario"}>Usuario</MenuItem>
                <MenuItem value={"Administrador"}>Administrador</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"¿Desea eliminar al usuario?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Al hacer click en eliminar, el usuario será eliminado de la base de datos.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button onClick={handleDelete} autoFocus>
                Eliminar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Stack direction="row" spacing={20} m={6}>
          <Button variant="outlined" href="users">
            Cancelar
          </Button>
          <Button variant="contained" type="submit">
            Modificar
          </Button>
          <Button variant="contained" color="error" onClick={handleClickOpen}>
            Eliminar
          </Button>
        </Stack>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
