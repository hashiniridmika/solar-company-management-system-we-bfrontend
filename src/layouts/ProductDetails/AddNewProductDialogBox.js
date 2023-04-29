import { Grid, Typography } from "@mui/material";
import React from "react";
import AddNewProductDialogBoxTextfield from "../../components/AddNewBox/AddNewProductDialogBoxTextfield";

export default function AddNewProductDialogBox() {
  return (
    <div>
      <Typography align="center" sx={{ pt: 2, fontSize: 30, color: "#00C569" }}>
        Add New Product
      </Typography>
      <Typography
        align="center"
        sx={{ padding: 1.5, fontSize: 13, color: "#6D6D6D" }}
      >
        Grow Your Business: Showcase Your Latest Offering and Reach a Wider
        Audience by Adding Your Product to Our Diverse and Curated Collection.
        Start Selling Today!
      </Typography>
      <Grid container>
        <Grid item padding={2}>
          <AddNewProductDialogBoxTextfield />
          <AddNewProductDialogBoxTextfield />
          <AddNewProductDialogBoxTextfield />
        </Grid>
      </Grid>
    </div>
  );
}
