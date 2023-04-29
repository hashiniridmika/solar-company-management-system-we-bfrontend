import React from "react";
import { TextField, Typography } from "@mui/material";

export default function AddNewProductDialogBoxTextfield({ name, placeholder }) {
  return (
    <div style={{ paddingLeft: "10%" }}>
      <Typography color="#000000">{name}</Typography>
      <TextField
        sx={{ borderRadius: 10 }}
        placeholder={placeholder}
        size="small"
      />
    </div>
  );
}
