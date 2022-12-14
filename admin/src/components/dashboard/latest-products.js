import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const products = [
  {
    id: uuid(),
    name: 'Par de Cuartos Laterales',
    imageUrl: '/static/images/products/cuartos-laterales-1.jpg',
    updatedAt: 2
  },
  {
    id: uuid(),
    name: 'Juego de Herramientas de Mano',
    imageUrl: '/static/images/products/caja-herramienta-1.png',
    updatedAt: 2
  },
  {
    id: uuid(),
    name: 'Moto-Bateria LTH de 14 Ampers/H (12N14-3A)',
    imageUrl: '/static/images/products/bateria-1.png',
    updatedAt: 4
  },
  {
    id: uuid(),
    name: 'Llanta 205 /55 R16',
    imageUrl: '/static/images/products/llantas-1.png',
    updatedAt: 6
  },
  {
    id: uuid(),
    name: 'Balatas Ceramicas Delanteras',
    imageUrl: '/static/images/products/balatas-2.jpg',
    updatedAt: 7
  }
];

export const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} en total`}
      title="Vendidos recientemente"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Hace ${product.updatedAt} horas`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        Ver más
      </Button>
    </Box>
  </Card>
);
