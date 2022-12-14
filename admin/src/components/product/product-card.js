import PropTypes from "prop-types";
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CategoryIcon from '@mui/icons-material/Category';
import Link from "next/link";

export const ProductCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
    {...rest}
  >
    <Box
          sx={{
            p: 3,
            position: "absolute",
            top: "1",
            mr: 0,
            ml: "22%"
          }}
        >
          <Link href={{
            pathname: "/product-update",
            query: {
              id: product.id
            }
          }}>
            <EditIcon />
          </Link>
        </Box>
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 3,
        }}
      >
        {/*
        <Avatar alt="Producto" src={product.media} variant="square" height="250px" width="250px" />
      */}
      </Box>

      <Typography align="center" color="textPrimary" gutterBottom variant="body1">
        {product.nombre}
      </Typography>
      <Typography align="center" color="textPrimary" variant="body2">
        {product.descripcion}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <CategoryIcon />
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            {product.categorias}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography color={product.disponibilidad < 20 ? "red" : "darkgreen"} display="inline" sx={{ pl: 1 }} variant="body2">
            {product.disponibilidad}
          </Typography>
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            en stock.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
