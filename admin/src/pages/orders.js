import { format } from "date-fns";
import Head from "next/head";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SeverityPill } from "../components/severity-pill";
import { DashboardLayout } from "../components/dashboard-layout";
import { OrdersToolBar } from "../components/orders/orders-tool-bar";

const orders = [
  {
    id: uuid(),
    ref: "4120",
    amount: 5321,
    customer: {
      name: "Carlos Angulo",
    },
    createdAt: "05/12/22",
    status: "pendiente",
  },
  
];

function Page() {
  return (
    <>
      <Head>
        <title>Productos - Refaccionaria Ruiz</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <OrdersToolBar />
          <PerfectScrollbar>
            <Box sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID PEDIDO</TableCell>
                    <TableCell>Cliente</TableCell>
                    <TableCell sortDirection="desc">
                      <Tooltip enterDelay={300} title="Sort">
                        <TableSortLabel active direction="desc">
                          FECHA
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow hover key={order.id}>
                      <TableCell>{order.ref}</TableCell>
                      <TableCell>{order.customer.name}</TableCell>
                      <TableCell>{order.createdAt}</TableCell>
                      <TableCell>
                        <SeverityPill
                          color={
                            (order.status === "entregado" && "success") ||
                            (order.status === "cancelado" && "error") ||
                            "warning"
                          }
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
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
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
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
