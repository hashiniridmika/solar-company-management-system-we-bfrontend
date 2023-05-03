import React from "react";
import DashboardTop from "../../components/Dashboard/DashboardTop";
import DashboardImage from "../../components/Dashboard/DashboardImage";
import { Dialog, Grid, Typography } from "@mui/material";
import DashboardCategory from "../../components/Dashboard/DashboardCategory";
import DashboardCategoryAddButton from "../../components/Dashboard/DashboardCategoryAddButton";
import DashboardAnaliticImage from "../../components/Dashboard/DashboardAnaliticImage";
import AddCategoryDialogBox from "./AddCategoryDialogBox";

export default function DashboardDetails() {
  return (
    <div>
      <DashboardTop />
      <DashboardImage />
      <div style={{ textAlign: "left" }}>
        <Typography
          sx={{
            color: "#00C569",
            fontSize: 30,
            pl: 4,
            pt: 3,
          }}
        >
          CATEGORY
        </Typography>
      </div>

      <Grid container sx={{ paddingLeft: 1, paddingTop: 3 }}>
        <Grid item xs={1.5}>
          <DashboardCategory />
        </Grid>
        <Grid item xs={1.5}>
          <DashboardCategory />
        </Grid>
        <Grid item xs={1.5}>
          <DashboardCategory />
        </Grid>
        <Grid item xs={1.5}>
          <DashboardCategory />
        </Grid>
        <Grid item xs={1.5}>
          <DashboardCategory />
        </Grid>
        <Grid item xs={1.5}>
          <DashboardCategory />
        </Grid>
        <Grid item xs={1.5}>
          <DashboardCategory />
        </Grid>
        <Grid item xs={1.5}>
          <DashboardCategoryAddButton />
        </Grid>
      </Grid>

      <div style={{ textAlign: "left" }}>
        <Typography
          sx={{
            color: "#00C569",
            fontSize: 30,
            pl: 4,
            pt: 3,
          }}
        >
          ANALITIC
        </Typography>
      </div>
      <DashboardAnaliticImage />
      <Dialog>
        <AddCategoryDialogBox />
      </Dialog>
    </div>
  );
}
