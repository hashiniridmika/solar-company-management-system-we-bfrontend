import { Grid, Typography } from "@mui/material";
import React from "react";
import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
import OrderStatusSelectBox from "../../components/OrderBox/OrderStatusSelectBox";
import OrderSaveButton from "../../components/OrderBox/OrderSaveButton";

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
        <Grid item xs={6}>
          <AddNewDialogBoxTextfield fieldname="Order Items" rows={8} />
        </Grid>
        <Grid item xs={6}>
          <OrderStatusSelectBox fieldintro="Order Status" />

          <OrderSaveButton />
        </Grid>
      </Grid>
    </div>
  );
}
