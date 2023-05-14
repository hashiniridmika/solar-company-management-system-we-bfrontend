import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
import EditUserButton from "../../components/UserBox/EditUserButton";
import { useDispatch, useSelector } from "react-redux";
import { setUserSelectedAgent } from "../../store/actions/agentAction";

export default function EditUserDialogBox() {
  const dispatch = useDispatch();
  const { userSelectedAgent } = useSelector((store) => store.agentReducer);
  console.log(userSelectedAgent);

  const handleChange = (value, name) => {
    dispatch(setUserSelectedAgent({ ...userSelectedAgent, [name]: value }));

    console.log(name);
    console.log(value);
  };

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
          <AddNewDialogBoxTextfield
            fieldname="Agent Name"
            value={userSelectedAgent.agentName}
            handleChange={handleChange}
            name="agentName"
          />
          <AddNewDialogBoxTextfield
            fieldname="Username"
            value={userSelectedAgent.username}
            handleChange={handleChange}
            name="username"
          />
          <AddNewDialogBoxTextfield
            fieldname="Password"
            value={userSelectedAgent.password}
            handleChange={handleChange}
            name="password"
          />
        </Grid>
        <Grid item xs={6}>
          <AddNewDialogBoxTextfield
            fieldname="Email Address"
            value={userSelectedAgent.emailAddress}
            handleChange={handleChange}
            name="emailAddress"
          />
          <AddNewDialogBoxTextfield
            fieldname="Mobile Number"
            value={userSelectedAgent.mobileNumber}
            handleChange={handleChange}
            name="mobileNumber"
          />
          <AddNewDialogBoxTextfield
            fieldname="Company Address"
            value={userSelectedAgent.companyAddress}
            handleChange={handleChange}
            name="companyAddress"
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
          <EditUserButton />
        </Grid>
      </Grid>
    </div>
  );
}
