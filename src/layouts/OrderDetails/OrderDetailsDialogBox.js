import { Grid, TableBody, TableRow, Typography } from "@mui/material";
import React from "react";
//import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
import OrderStatusSelectBox from "../../components/OrderBox/OrderStatusSelectBox";
import OrderSaveButton from "../../components/OrderBox/OrderSaveButton";
import { Table, TableCell } from "@mui/material";

export default function OrderDetailsDialogBox() {
  return (
    <div>
      <Typography align="center" sx={{ pt: 2, fontSize: 30, color: "#00C569" }}>
        Order Details
      </Typography>
      <Typography
        align="center"
        sx={{ padding: 1.5, fontSize: 13, color: "#6D6D6D" }}
      >
        Welcome to the "Order Details" page. View and manage customer orders,
        update status and export data.
      </Typography>

      <Grid container>
        <Grid item xs={8} sx={{ pt: "20px", pl: "40px", spacing: "20" }}>
          {/* <Typography>Order Products</Typography>
          <Typography>hi</Typography> */}
          <Table>
            <TableCell style={{ fontWeight: "bold" }}>Order Items</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Quantity</TableCell>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
        {/* <Grid item xs={4} sx={{ pt: "20px", pl: "20px" }}>
          <Typography>Quantity</Typography>
        </Grid> */}
        <Grid item xs={4}>
          <OrderStatusSelectBox fieldintro="Order Status" />
          <OrderSaveButton />
        </Grid>
      </Grid>
    </div>
  );
}
