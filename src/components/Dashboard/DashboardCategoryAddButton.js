import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function DashboardCategoryAddButton() {
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
            color: "#00C569",
            borderColor: "#00C569",
          },
        }}
      >
        <AddIcon sx={{ color: isClicked ? "#3d8c40" : "#3d8c40" }} />
      </Button>
    </div>
  );
}
