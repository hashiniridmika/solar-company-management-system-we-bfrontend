import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
import AddNewDialogBoxButton from "../../components/AddNewBox/AddNewDialogBoxButton";

export default function AddNewUserDialogBox() {
  return (
    <div>
      <Typography align="center" sx={{ pt: 2, fontSize: 30, color: "#00C569" }}>
        Add New Agent
      </Typography>
      <Typography
        align="center"
        sx={{ padding: 1.5, fontSize: 13, color: "#6D6D6D" }}
      >
        This page allows you to add new users to the system. Enter the required
        information and click "Add" to create a new user account.
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
          <AddNewDialogBoxTextfield
            name="Agent Name"
            placeholder="Agent Name"
          />
          <AddNewDialogBoxTextfield name="Username" placeholder="Username" />
          <AddNewDialogBoxTextfield name="Password" placeholder="Password" />
        </Grid>
        <Grid item xs={6}>
          <AddNewDialogBoxTextfield
            name="Email Address"
            placeholder="Email Address"
          />
          <AddNewDialogBoxTextfield
            name="Mobile Number"
            placeholder="+94 - - - - - - - - - "
          />
          <AddNewDialogBoxTextfield
            name="Company Address"
            placeholder="Company Address"
          />
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
          <AddNewDialogBoxButton />
        </Grid>
      </Grid>
    </div>
  );
}
