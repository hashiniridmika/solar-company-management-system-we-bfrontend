import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function DashboardCategory({ buttonName }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div style={{ paddingLeft: "30px" }}>
      <Button
        onClick={handleClick}
        sx={{
          color: isClicked ? "#FFFFFF" : "#FFFFFF",
          borderColor: isClicked ? "#00C569" : "#00C569",
          backgroundColor: "#00C569",
          textTransform: "none",
          borderRadius: 2,
          "&:hover": {
            color: "#000000",
            borderColor: "#87ab69",
          },
          width: 135,
          fontFamily: "Poppins",
        }}
      >
        {buttonName}
      </Button>
    </div>
  );
}
