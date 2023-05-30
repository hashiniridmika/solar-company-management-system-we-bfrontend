import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
// eslint-disable-next-line
import { useDispatch, useSelector } from "react-redux";
import AddUserButton from "../../components/UserBox/AddUserButton";
import { setUserSelectedAgent } from "../../store/actions/agentAction";

export default function AddNewUserDialogBox({ handleButtonOnClick }) {
  const dispatch = useDispatch();
  const { userSelectedAgent } = useSelector((store) => store.agentReducer);
  console.log(userSelectedAgent);

  const handleChange = (value, name) => {
    dispatch(setUserSelectedAgent({ ...userSelectedAgent, [name]: value }));
  };

  return (
    <div>
      <Typography
        align="center"
        sx={{ pt: 2, fontSize: 30, color: "#00C569", fontFamily: "Poppins" }}
      >
        Add New Agent
      </Typography>
      <Typography
        align="center"
        sx={{
          padding: 1.5,
          fontSize: 13,
          color: "#6D6D6D",
          fontFamily: "Poppins",
        }}
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
            handleChange={handleChange}
            name="agentName"
          />
          <AddNewDialogBoxTextfield
            fieldname="Username"
            placeholder="Username"
            handleChange={handleChange}
            name="username"
          />
          <AddNewDialogBoxTextfield
            fieldname="Password"
            placeholder="Password"
            handleChange={handleChange}
            name="password"
          />
        </Grid>
        <Grid item xs={6}>
          <AddNewDialogBoxTextfield
            fieldname="Email Address"
            placeholder="Email Address"
            handleChange={handleChange}
            name="emailAddress"
          />
          <AddNewDialogBoxTextfield
            fieldname="Mobile Number"
            placeholder="+94 - - - - - - - - - "
            handleChange={handleChange}
            name="mobileNumber"
          />
          <AddNewDialogBoxTextfield
            fieldname="Company Address"
            placeholder="Company Address"
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
          <AddUserButton handleButtonOnClick={handleButtonOnClick} />
        </Grid>
      </Grid>
    </div>
  );
}
