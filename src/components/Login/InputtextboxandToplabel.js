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

      <TextField
        fullWidth
        margin="dense"
        sx={{
          "& .MuiInputLabel-root": { color: "#00C569" },
          border: "1px solid #00C569",
          borderRadius: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add the shadow style here
        }}
        InputProps={{ disableUnderline: true }}
        variant="standard"
      />
    </div>
  );
}
