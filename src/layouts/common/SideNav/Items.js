import React from "react";
import Item from "../../../components/common/SideNav/Item";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Items() {
  const button = [
    "Product Management",
    "Order Management",
    "Stock Management",
    "User Management",
  ];
  return (
    <div>
      <Grid2 container direction="column">
        {button.map((val, key) => {
          return (
            <Grid2 Item key={key}>
              <Item info={val} />
            </Grid2>
          );
        })}
      </Grid2>
    </div>
  );
}
