import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

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
