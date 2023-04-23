import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

export default function TopicDetails() {
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
            Product Details
          </Typography>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            startIcon={<LogoutIcon sx={{ color: "#000000" }} />}
            sx={{
              backgroundColor: "#00C569",
              width: 120,
              textTransform: "none",

              color: "black",
              "&:hover": {
                backgroundColor: "#00C569", // Change hover background color
                opacity: 0.8,
              },
              "&:active": {
                backgroundColor: "#00C569", // Change active background color
                opacity: 0.5,
              },
            }}
          >
            Log out
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <Typography sx={{ pl: 4 }}>
          Solar panels are those devices which are used to absorb the sun's rays
          and convert them into electricity or heat. Description: A solar panel
          is actually a collection of solar (or photovoltaic) cells, which can
          be used to generate electricity through photovoltaic effect.
        </Typography>
      </Grid>
    </div>
  );
}
