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
          color: "#7E7E7E",
          borderColor: "#E8E8E8",
          textTransform: "none",
        }}
      >
        Search
      </Button>
    </div>
  );
}
