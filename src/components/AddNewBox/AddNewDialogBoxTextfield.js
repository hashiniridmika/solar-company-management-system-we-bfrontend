import React from "react";
import { TextField, Typography } from "@mui/material";

export default function AddNewDialogBoxTextfield({ name, placeholder, rows }) {
  return (
    <div
      style={{ paddingLeft: "20px", paddingTop: "20px", paddingRight: "20px" }}
    >
      <Typography color="#000000" fontSize={14}>
        {name}
      </Typography>
      <TextField
        sx={{ borderRadius: 10 }}
        placeholder={placeholder}
        size="small"
        multiline={true}
        rows={rows}
        fullWidth
      />
    </div>
  );
}
