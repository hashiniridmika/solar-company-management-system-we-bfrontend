import React from "react";
import { Typography, TextField } from "@mui/material";
export default function InputtextboxandToplabel({ info }) {
  return (
    <div
      style={{
        textAlign: "left",
        color: "#797979",
      }}
    >
      <Typography>{info}</Typography>
      <TextField fullWidth variant="outlined" margin="dense" />
    </div>
  );
}
