import { Button } from "@mui/material";
import React from "react";

export default function CategorySaveButton() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#00C569",
          textTransform: "none",
          width: 150,

          "&:hover": {
            backgroundColor: "#00C569", // Change hover background color
            opacity: 0.8,
          },
          "&:active": {
            backgroundColor: "#00C569", // Change active background color
            opacity: 0.5,
          },
        }}
      >
        Save
      </Button>
    </div>
  );
}
