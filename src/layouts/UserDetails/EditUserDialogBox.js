import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
import EditUserButton from "../../components/UserBox/EditUserButton";

export default function EditUserDialogBox() {
  return (
    <div>
      <Typography align="center" sx={{ pt: 2, fontSize: 30, color: "#00C569" }}>
        Edit Agent
      </Typography>
      <Typography
        align="center"
        sx={{ padding: 1.5, fontSize: 13, color: "#6D6D6D" }}
      >
        Edit agent page allows admins to update agent's informations.
      </Typography>
      <Avatar
        sx={{
          width: 120,
          height: 120,
          margin: "auto",
          textAlign: "center",
          justifyContent: "center",
          border: "2px solid #00C569",
        }}
      ></Avatar>
      <Grid container>
        <Grid item xs={6}>
          <AddNewDialogBoxTextfield name="Agent Name" />
          <AddNewDialogBoxTextfield name="Username" />
          <AddNewDialogBoxTextfield name="Password" />
        </Grid>
        <Grid item xs={6}>
          <AddNewDialogBoxTextfield name="Email Address" />
          <AddNewDialogBoxTextfield name="Mobile Number" />
          <AddNewDialogBoxTextfield name="Company Address" />
        </Grid>
        <Grid
          item
          sx={{
            margin: "auto",
            textAlign: "center",
            justifyContent: "center",
            paddingTop: "15px",
          }}
        >
          <EditUserButton />
        </Grid>
      </Grid>
    </div>
  );
}
