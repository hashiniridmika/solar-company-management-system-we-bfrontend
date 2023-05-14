import { Typography } from "@mui/material";
import React from "react";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";

export default function ViewProductFeedbackDialogBox() {
  return (
    <div>
      <Typography align="center" sx={{ pt: 2, fontSize: 30, color: "#00C569" }}>
        Reviews And Ratings
      </Typography>

      {/* <Stack spacing={1}>
        <Rating name="size-small" defaultValue={2} size="small" />
      </Stack> */}
    </div>
  );
}
