import React from "react";
import { Button } from "@mui/material";

export default function OrderStatusButton({ name, backgroundColor }) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: backgroundColor,
          textTransform: "none",
          width: 140,
          color: "#000000",
          "&:hover": {
            backgroundColor: backgroundColor, // Change hover background color
            opacity: 0.8,
          },
          "&:active": {
            backgroundColor: backgroundColor, // Change active background color
            opacity: 0.5,
          },
          fontFamily: "Poppins",
        }}
      >
        {name}
      </Button>
    </div>
  );
}
