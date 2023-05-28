import React from "react";
import { Typography, TextField } from "@mui/material";

export default function InputtextboxandToplabel({
  label,
  placeholder,
  handleChange,
}) {
  return (
    <div
      style={{
        textAlign: "left",
        color: "#797979",
      }}
    >
      <Typography>{label}</Typography>
      <TextField
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        fullWidth
        variant="standard"
        margin="dense"
        sx={{
          "& .MuiInputLabel-root": { color: "#00C569" },
          border: "1px solid #00C569",
          borderRadius: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add the shadow style here
        }}
        InputProps={{ disableUnderline: true }}
      />
    </div>
  );
}
