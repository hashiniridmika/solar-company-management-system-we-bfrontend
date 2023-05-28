import React from "react";
import { Grid, Typography } from "@mui/material";
import TopNavLogOutButton from "./TopNavLogOutButton";

export default function TopicDetails({ name, content }) {
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
            {name}
          </Typography>
        </Grid>

        <Grid item>
          <TopNavLogOutButton />
        </Grid>
      </Grid>
      <Grid
        item
        sx={{ textAlign: "left", paddingTop: "10px", paddingRight: "15px" }}
      >
        <Typography sx={{ pl: 4, pb: 1, color: "#6D6D6D", fontSize: 15 }}>
          {content}
        </Typography>
      </Grid>
    </div>
  );
}
