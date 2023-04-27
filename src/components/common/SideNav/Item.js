import { Button } from "@mui/material";
import React from "react";

export default function Item({ title, isActive }) {
  return (
    <div>
      <Button
        sx={{
          width: 220,
          height: 50,
          textTransform: "none",
          backgroundColor: isActive ? "#CCFCE5" : "",
          color: isActive ? "#047942" : "#868686",
          padding: 1,
          textAlign: "left",
          justifyContent: "left",
          paddingLeft: "10px",
          pointerEvents: isActive ? "none" : "auto",
        }}
      >
        {title}
      </Button>
    </div>
  );
}
