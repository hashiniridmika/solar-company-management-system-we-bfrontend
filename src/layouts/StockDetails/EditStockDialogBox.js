import { Grid, Typography } from "@mui/material";
import React from "react";
import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
import EditUpdateButton from "../../components/EditBox/EditUpdateButton";

export default function EditStockDialogBox() {
  return (
    <div>
      <Typography align="center" sx={{ pt: 2, fontSize: 30, color: "#00C569" }}>
        Edit Stock
      </Typography>
      <Typography
        align="center"
        sx={{ padding: 1.5, fontSize: 13, color: "#6D6D6D" }}
      >
        Edit stock details with input fields and update button
      </Typography>

      <Grid container>
        <Grid item xs={4}>
          <AddNewDialogBoxTextfield name="Category" />
        </Grid>
        <Grid item xs={4}>
          <AddNewDialogBoxTextfield name="Product Name" />
        </Grid>
        <Grid item xs={4}>
          <AddNewDialogBoxTextfield name="Stock Count" />
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          margin: "auto",
          textAlign: "center",
          justifyContent: "center",
          paddingTop: "35px",
        }}
      >
        <EditUpdateButton />
      </Grid>
    </div>
  );
}
