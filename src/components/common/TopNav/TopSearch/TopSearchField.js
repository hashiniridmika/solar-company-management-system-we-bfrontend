import { TextField } from "@mui/material";
import React from "react";

export default function TopSearchField() {
  return (
    <div>
      <TextField
        placeholder="What do you want to search"
        sx={{
          "& .MuiOutlinedInput-root": { height: 38 },
          width: 650,
        }}
      />
    </div>
  );
}
