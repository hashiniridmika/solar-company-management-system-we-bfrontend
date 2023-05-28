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
                backgroundColor: status === 1 ? "#FFFF8A" : "#FFFF8A",
                color: status === 1 ? "black" : "black",
              }}
            >
              Pending
            </MenuItem>
            <MenuItem
              value={20}
              sx={{
                backgroundColor: status === 2 ? "#b9d2ee" : "#b9d2ee",
                color: status === 2 ? "black" : "black",
              }}
            >
              Processing
            </MenuItem>
            <MenuItem
              value={30}
              sx={{
                backgroundColor: status === 3 ? "#ff5047" : "#ff5047",
                color: status === 3 ? "black" : "black",
              }}
            >
              Cancel
            </MenuItem>
            <MenuItem
              value={40}
              sx={{
                backgroundColor: status === 4 ? "#e8bcf0" : "#e8bcf0",
                color: status === 4 ? "black" : "black",
              }}
            >
              Shipping
            </MenuItem>
            <MenuItem
              value={0}
              sx={{
                backgroundColor: status === 5 ? "#a9ffa9" : "#a9ffa9",
                color: status === 5 ? "black" : "black",
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
