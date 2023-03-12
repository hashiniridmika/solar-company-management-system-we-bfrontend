import { Button } from "@mui/material";
import React from "react";

export default function Item({ info }) {
  return (
    <div>
      <Button
        sx={{
          textTransform: "none",
          width: 220,
          height: 50,
          justifyContent: "flex-start",
          color: "#868686",
          ":hover": {
            backgroundColor: "#E3FFE9",
            color: "#047942",
          },
        }}
      >
        {info}
      </Button>
    </div>
  );
}
