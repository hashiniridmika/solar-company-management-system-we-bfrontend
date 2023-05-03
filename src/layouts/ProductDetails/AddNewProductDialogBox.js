import { Grid, Typography } from "@mui/material";
import React from "react";
import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
import AddNewDialogBoxButton from "../../components/AddNewBox/AddNewDialogBoxButton";
import AddNewProductDialogBooxSelectBox from "../../components/AddNewBox/AddNewProductDialogBooxSelectBox";

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
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <AddNewDialogBoxTextfield
            name="Product Name"
            placeholder="Enter Product Name"
          />
          <AddNewDialogBoxTextfield
            name="Description"
            placeholder="Enter Description"
            rows={4}
          />
          <Grid container>
            <Grid item xs={6}>
              <AddNewDialogBoxTextfield
                name="Price(LKR)"
                placeholder="Enter Price"
              />
            </Grid>
            <Grid item xs={6}>
              <AddNewDialogBoxTextfield
                name="Stock Count"
                placeholder="Enter Count"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <AddNewProductDialogBooxSelectBox />
          <AddNewDialogBoxTextfield />
          <AddNewDialogBoxButton />
        </Grid>
      </Grid>
    </div>
  );
}
