import React from "react";
import Button from "@mui/material/Button";

export default function AddNewProductButton({ handleClickOpen }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: "1%",
        paddingBottom: "1%",
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#00C569",
          width: 120,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#00C569", // Change hover background color
            opacity: 0.8,
          },
          "&:active": {
            backgroundColor: "#00C569", // Change active background color
            opacity: 0.5,
          },
        }}
        onClick={handleClickOpen}
      >
        Add New
      </Button>
    </div>
  );
}
