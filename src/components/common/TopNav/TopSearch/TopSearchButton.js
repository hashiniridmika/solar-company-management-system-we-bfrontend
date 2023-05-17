import { Button } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function TopSearchButton() {
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<SearchIcon />}
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#d8d6ca",
          borderColor: "#EEEEEE",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#FFFFFF",
            opacity: 0.8,
          },
          "&:active": {
            backgroundColor: "#FFFFFF",
            opacity: 1, // Change opacity to 1 to remove the fading effect
          },
        }}
      >
        Search
      </Button>
    </div>
  );
}
