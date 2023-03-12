import React from "react";
import Profile from "./SideNav/Profile";
import Items from "./SideNav/Items";
import Statistic from "./SideNav/Statistic";
import Divider from "@mui/material/Divider";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function SideNav() {
  return (
    <div>
      <Grid2 container direction="column">
        <Grid2 Item pt={2}>
          <Profile />
        </Grid2>
        <Grid2 container pl={2} pt={1}>
          Dashboard
        </Grid2>
        <Grid2 container pt={5} pb={6}>
          <Items />
        </Grid2>
        <Divider variant="middle" />
        <Grid2>
          <Statistic />
        </Grid2>
      </Grid2>
    </div>
  );
}
