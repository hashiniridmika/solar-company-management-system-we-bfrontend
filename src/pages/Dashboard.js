import React from "react";
import SideNav from "../layouts/common/SideNav";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DashboardDetails from "../layouts/Dashboard/DashboardDetails";

export default function Dashboard() {
  return (
    <div>
      <Grid2 container>
        <Grid2
          Item
          xs={2}
          style={{ borderRight: "2px solid #D1D1D1", height: "100vh" }}
        >
          <SideNav />
        </Grid2>
        <Grid2 Item xs={10}>
          <DashboardDetails />
        </Grid2>
      </Grid2>
    </div>
  );
}
