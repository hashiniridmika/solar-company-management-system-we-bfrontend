import React from "react";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function TopNavLogOutButton() {
  return (
    <div>
      <Button
        variant="contained"
        href="/"
        startIcon={<LogoutIcon sx={{ color: "#000000", fontSize: "large" }} />}
        sx={{
          backgroundColor: "#00C569",
          width: 120,
          textTransform: "none",

          color: "#000000",
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
        Log out
      </Button>
    </div>
  );
}
