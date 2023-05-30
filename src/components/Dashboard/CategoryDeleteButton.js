import { Button } from "@mui/material";
import React from "react";

export default function CategoryDeleteButton() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#00C569", // Set font color to green
          borderColor: "#00C569", // Set border color to green
          textTransform: "none",
          width: 150,
          "&:hover": {
            backgroundColor: "#FFFFFF",
            opacity: 0.8,
          },
          "&:active": {
            backgroundColor: "#FFFFFF",
            opacity: 0.5,
          },
          fontFamily: "Poppins",
        }}
      >
        Delete
      </Button>
    </div>
  );
}
