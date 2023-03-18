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
          ":hover": "none",
        }}
      >
        Login
      </Button>
    </div>
  );
}
