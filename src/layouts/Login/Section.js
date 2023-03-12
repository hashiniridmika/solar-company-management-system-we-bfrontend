import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import TextBox from "../../components/Login/TextBox";
import Button from "../../components/Login/Button";

export default function Section() {
  return (
    <div>
      <Grid2 container direction="column">
        Login
        <TextBox />
        <TextBox />
        <Button />
      </Grid2>
    </div>
  );
}
