import { TextField } from "@mui/material";
import React from "react";

export default function TopSearchField() {
  return (
    <div>
      <TextField
        placeholder="What do you want to search"
        variant="standard"
        margin="dense"
        sx={{
          "& .MuiInputLabel-root": { height: 37, color: "#d8d6ca" },
          border: "none",
          borderRadius: 1,
          width: 800,
          backgroundColor: "#FFFFFF", // Add the shadow style here
          "& .MuiInputBase-input::placeholder": {
            // Add this selector for placeholder
            paddingLeft: "10px", // Set the left padding here
            fontFamily: "Poppins",
          },
        }}
        InputProps={{ disableUnderline: true }}
      />
    </div>
  );
}
