import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DashboardLayout } from "../components/dashboard-layout";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useQuery, gql, useMutation } from "@apollo/client";
import { LOAD_PRODUCT } from "../graphql/queries";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UPDATE_PRODUCT, DELETE_PRODUCT } from "../graphql/mutations";

function Page() {
  const router = useRouter();
  const dataR = router.query;
  const prodId = dataR.id;

  const { error, loading, data } = useQuery(LOAD_PRODUCT, {
    variables: { id: prodId },
  });

  const [product, setProduct] = useState({});
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [marca, setMarca] = useState("");
  const [categorias, setCategorias] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [open, setOpen] = useState(false);
  const [stock, setStock] = useState("");

  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct] = useMutation(DELETE_PRODUCT)

  useEffect(() => {
    if (data) {
      setProduct(data.getProduct);
      setNombre(product.nombre);
      setPrecio(product.precio);
      setMarca(product.marca);
      setCategorias(product.categorias);
      setDescripcion(product.descripcion);
      setStock(product.disponibilidad)
    }
  }, [data]);

  const update = () => {
    updateProduct({
      variables: {
        id: prodId,
        nombre: nombre,
        marca: marca,
        precio: precio,
        categorias: categorias,
        descripcion: descripcion,
        disponibilidad: stock,
      },
    });
  };

  const deleteP = () => {
    deleteProduct({
      variables: {
        id: prodId,
      },
    });
  };

  const handleSubmit = (event) => {
    update();
    router.push("/products");
  };

  const handleDelete = (event) => {
    deleteP();
    router.push("/products");
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
        <h1 style={{ marginLeft: 50, marginTop: 20 }}>Modificar Producto</h1>
        <div>
          <TextField
            id="outlined-textarea"
            label="Nombre"
            defaultValue={product.nombre}
            multiline
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Precio"
            defaultValue={product.precio}
            multiline
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setPrecio(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Marca"
            defaultValue={product.marca}
            multiline
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setMarca(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Categoria"
            defaultValue={product.categorias}
            multiline
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setCategorias(e.target.value);
            }}
          />
          <TextField
            id="outlined-textarea"
            label="Stock"
            defaultValue={product.disponibilidad}
            multiline
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setStock(e.target.value);
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Descripción"
            multiline
            rows={6}
            defaultValue={product.descripcion}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setDescripcion(e.target.value);
            }}
          />
          <label m={100}>Imagen</label>
          <IconButton aria-label="delete" size="large">
            <AddIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"¿Desea eliminar el producto?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Al hacer click en eliminar, el producto será eliminado de la base de datos.
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
          <Button variant="outlined" href="products">
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
