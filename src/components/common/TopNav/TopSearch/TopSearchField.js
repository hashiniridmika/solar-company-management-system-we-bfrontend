import { TextField } from "@mui/material";
import React from "react";
//import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

export default function TopSearchField() {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(true);
  };
  return (
    <div>
      <TextField
        placeholder="What do you want to search"
        sx={{
          "& .MuiOutlinedInput-root": {
            height: 37,
            borderColor: clicked ? "#E8E8E8" : undefined,
          },
          "& .MuiOutlinedInput-root:hover": {
            borderColor: clicked ? "#E8E8E8" : undefined,
          },
          width: 650,
          backgroundColor: "#FFFFFF",
        }}
        onClick={handleClick}
      />
    </div>
  );
}
