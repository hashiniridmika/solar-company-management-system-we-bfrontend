import React from "react";
import Button from "@mui/material/Button";

export default function LoginButton() {
  return (
    <div style={{ paddingTop: "10%" }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#00C569",
          width: "60%",
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
      >
        Login
      </Button>
    </div>
  );
}
