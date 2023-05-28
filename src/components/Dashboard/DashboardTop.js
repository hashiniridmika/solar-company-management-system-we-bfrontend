import React from "react";
import { Grid, Typography } from "@mui/material";
import TopNavLogOutButton from "../common/TopNav/TopnavTopic/TopNavLogOutButton";

export default function DashboardTop() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        pt={1}
        pr={4}
      >
        <Grid item>
          <Typography sx={{ color: "#00C569", fontSize: 30, pl: 4 }}>
            DASHBOARD
          </Typography>
        </Grid>

        <Grid item>
          <Typography sx={{ color: "#929292", pl: 80 }}>
            {currentDate}
          </Typography>
        </Grid>

        <Grid item>
          <TopNavLogOutButton />
        </Grid>
      </Grid>
    </div>
  );
}
