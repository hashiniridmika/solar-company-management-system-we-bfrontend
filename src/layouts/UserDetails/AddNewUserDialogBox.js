import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
// eslint-disable-next-line
import { useSelector } from "react-redux";
import AddUserButton from "../../components/UserBox/AddUserButton";

export default function AddNewUserDialogBox() {
  const { userSelectedAgent } = useSelector((store) => store.agentReducer);
  console.log(userSelectedAgent);

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
            fieldname="Agent Name"
            placeholder="Agent Name"
          />
          <AddNewDialogBoxTextfield
            fieldname="Username"
            placeholder="Username"
          />
          <AddNewDialogBoxTextfield
            fieldname="Password"
            placeholder="Password"
          />
        </Grid>
        <Grid item xs={6}>
          <AddNewDialogBoxTextfield
            fieldname="Email Address"
            placeholder="Email Address"
          />
          <AddNewDialogBoxTextfield
            fieldname="Mobile Number"
            placeholder="+94 - - - - - - - - - "
          />
          <AddNewDialogBoxTextfield
            fieldname="Company Address"
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
          <AddUserButton />
        </Grid>
      </Grid>
    </div>
  );
}
