import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function DashboardCategory() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{
          color: isClicked ? "#3d8c40" : "#3d8c40",
          borderColor: isClicked ? "#00C569" : "#00C569",
          borderRadius: 2,
          "&:hover": {
            color: "#87ab69",
            borderColor: "#87ab69",
          },
        }}
      >
        Category
      </Button>
    </div>
  );
}
