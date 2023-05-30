import React from "react";
import { Button } from "@mui/material";

export default function AddNewDialogBoxButton() {
  return (
    <div
      style={{ paddingLeft: "20px", paddingTop: "95px", paddingRight: "20px" }}
    >
      <Button
        // onClick={handleButtonOnClick}
        variant="contained"
        sx={{
          backgroundColor: "#00C569",
          textTransform: "none",
          width: 278,
          "&:hover": {
            backgroundColor: "#00C569", // Change hover background color
            opacity: 0.8,
          },
          "&:active": {
            backgroundColor: "#00C569", // Change active background color
            opacity: 0.5,
          },
          fontFamily: "Poppins",
        }}
      >
        Add New
      </Button>
    </div>
  );
}
