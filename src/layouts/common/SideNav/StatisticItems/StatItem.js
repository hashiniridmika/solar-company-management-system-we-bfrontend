import React from "react";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function StatItem({ info }) {
  return (
    <Grid2 container alignItems="center" spacing={2}>
      <Grid2 item>{info.icon}</Grid2>
      <Grid2 item textAlign="left">
        <Typography sx={{ color: "#868686" }}>{info.name}</Typography>
        <Typography>{info.value}</Typography>
      </Grid2>
    </Grid2>
  );
}
