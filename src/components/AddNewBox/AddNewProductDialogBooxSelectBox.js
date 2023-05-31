import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

export default function AddNewProductDialogBooxSelectBox({ fieldintro }) {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div
      style={{ paddingLeft: "20px", paddingTop: "20px", paddingRight: "20px" }}
    >
      <Box>
        <Typography color="#000000" fontSize={14} fontFamily={"Poppins"}>
          {fieldintro}
        </Typography>
        <FormControl fullWidth>
          <Select
            id="demo-simple-select"
            value={category}
            onChange={handleChange}
          >
            <MenuItem value={1}>Electeical items</MenuItem>
            <MenuItem value={2}>Panels</MenuItem>
            <MenuItem value={3}>Invertors</MenuItem>
            <MenuItem value={4}>Hardware items</MenuItem>
            <MenuItem value={5}>Battery</MenuItem>
            <MenuItem value={6}>Panel board</MenuItem>
            <MenuItem value={7}>Accessories</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
