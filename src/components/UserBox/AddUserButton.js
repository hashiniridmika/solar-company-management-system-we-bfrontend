import { Button } from "@mui/material";
import React from "react";

export default function AddUserButton() {
  return (
    <div
      style={{ paddingLeft: "20px", paddingTop: "20px", paddingRight: "20px" }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#00C569",
          textTransform: "none",
          width: 200,
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
        Create
      </Button>
    </div>
  );
}
