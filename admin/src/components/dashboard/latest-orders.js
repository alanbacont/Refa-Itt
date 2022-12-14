import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';

const orders = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 5321,
    customer: {
      name: 'Carlos Angulo'
    },
    createdAt: 1655016400000,
    status: 'pendiente'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 24351,
    customer: {
      name: 'Alan Barocio'
    },
    createdAt: 1655016400000,
    status: 'entregado'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 1099,
    customer: {
      name: 'Carlos Angulo'
    },
    createdAt: 1654930000000,
    status: 'cancelado'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 9643,
    customer: {
      name: 'Alan Barocio'
    },
    createdAt: 1654757200000,
    status: 'pendiente'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 3254,
    customer: {
      name: 'Carlos Angulo'
    },
    createdAt: 1654670800000,
    status: 'entregado'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 1676,
    customer: {
      name: 'Alan Barocio'
    },
    createdAt: 1654109800000,
    status: 'entregado'
  }
];

export const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Pedidos recientes" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                ID PEDIDO
              </TableCell>
              <TableCell>
                Cliente
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    FECHA
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {format(order.createdAt, 'dd/MM/yyyy')}
                </TableCell>
                <TableCell>
                  <SeverityPill
                    color={(order.status === 'entregado' && 'success')
                    || (order.status === 'cancelado' && 'error')
                    || 'warning'}
                  >
                    {order.status}
                  </SeverityPill>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        Ver más
      </Button>
    </Box>
  </Card>
);
