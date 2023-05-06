import { Box, Typography } from "@mui/material";
import React from "react";
import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
import CategorySaveButton from "../../components/Dashboard/CategorySaveButton";

export default function AddCategoryDialogBox() {
  return (
    <div>
      <Typography align="center" sx={{ pt: 2, fontSize: 25, color: "#00C569" }}>
        Add New Category
      </Typography>

      <div>
        <AddNewDialogBoxTextfield
          fieldname="New Category"
          placeholder="Enter Category Name"
        />
      </div>
      <Box display="flex" justifyContent="center" mt={4}>
        <CategorySaveButton />
      </Box>
    </div>
  );
}
