import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

export default function OrderStatusSelectBox({ fieldintro }) {
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div
      style={{ paddingLeft: "20px", paddingTop: "20px", paddingRight: "20px" }}
    >
      <Box>
        <Typography color="#000000" fontSize={14}>
          {fieldintro}
        </Typography>
        <FormControl fullWidth>
          <Select
            id="demo-simple-select"
            value={status}
            onChange={handleChange}
          >
            <MenuItem
              value={10}
              sx={{
                backgroundColor: status === 10 ? "#ff5047" : "#ff5047",
                color: status === 10 ? "black" : "black",
              }}
            >
              Cancel
            </MenuItem>
            <MenuItem
              value={20}
              sx={{
                backgroundColor: status === 20 ? "#b9d2ee" : "#b9d2ee",
                color: status === 20 ? "black" : "black",
              }}
            >
              In Progress
            </MenuItem>
            <MenuItem
              value={30}
              sx={{
                backgroundColor: status === 30 ? "#ffdf78" : "#ffdf78",
                color: status === 30 ? "black" : "black",
              }}
            >
              Shipping
            </MenuItem>
            <MenuItem
              value={40}
              sx={{
                backgroundColor: status === 40 ? "#a9ffa9" : "#a9ffa9",
                color: status === 40 ? "black" : "black",
              }}
            >
              Completed
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
