import { Grid, Typography } from "@mui/material";
import React from "react";
import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
import CategoryUpdateButton from "../../components/Dashboard/CategoryUpdateButton";
import CategoryDeleteButton from "../../components/Dashboard/CategoryDeleteButton";

export default function EditCategoryDialogBox() {
  return (
    <div>
      <Typography
        align="center"
        sx={{ pt: 2, fontSize: 25, color: "#00C569", fontFamily: "Poppins" }}
      >
        Edit Category
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <AddNewDialogBoxTextfield
            fieldname="Category"
            placeholder="Category Name"
          />
        </Grid>
        <Grid container sx={{ mt: 4, paddingLeft: 6 }}>
          <Grid item xs={6}>
            <CategoryUpdateButton />
          </Grid>
          <Grid item xs={6}>
            <CategoryDeleteButton />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
