import React from "react";
import { Typography, TextField } from "@mui/material";

export default function InputtextboxandToplabel({
  label,
  placeholder,
  handleChange,
  password,
}) {
  return (
    <div
      style={{
        textAlign: "left",
        color: "#797979",
      }}
    >
      <Typography sx={{ fontFamily: "Poppins" }}>{label}</Typography>
      <TextField
        type={password}
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
          paddingLeft: "10px",
          padding: "5px",
        }}
        InputProps={{ disableUnderline: true }}
      />
    </div>
  );
}
