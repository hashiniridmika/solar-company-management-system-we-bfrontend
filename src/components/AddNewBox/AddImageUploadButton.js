import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { IconButton } from "@mui/material";
import React from "react";

export default function AddImageUploadButton() {
  return (
    <div>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        sx={{ color: "#808080", fontSize: "large" }}
      >
        <input hidden accept="image/*" type="file" />
        <AddPhotoAlternateIcon />
      </IconButton>
    </div>
  );
}
