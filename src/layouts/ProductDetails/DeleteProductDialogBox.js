import { Typography } from "@mui/material";
import React from "react";
import CancelProductButton from "../../components/AddNewBox/CancelProductButton";
import DeleteProductButton from "../../components/AddNewBox/DeleteProductButton";

export default function DeleteProductDialogBox() {
  return (
    <div>
      <Typography align="center" sx={{ pt: 2, fontSize: 30, color: "#00C569" }}>
        Do you want delete this product?
      </Typography>
      <Typography
        align="center"
        sx={{ padding: 1.5, fontSize: 15, color: "#6D6D6D" }}
      >
        Are you sure?
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "30px",
        }}
      >
        <CancelProductButton />
        <DeleteProductButton />
      </div>
    </div>
  );
}
