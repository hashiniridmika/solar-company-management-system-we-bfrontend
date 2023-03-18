import React from "react";
import { Typography } from "@mui/material";
import InputtextboxandToplabel from "../../components/Login/InputtextboxandToplabel";
import LoginButton from "../../components/Login/LoginButton";

export default function Section() {
  return (
    <div style={{ marginLeft: "auto", marginRight: "auto", width: "30%" }}>
      <Typography color={"#797979"} fontSize={"120%"} paddingTop={"5%"}>
        Log In
      </Typography>
      <InputtextboxandToplabel info={"User name/Email"} />
      <InputtextboxandToplabel info={"Password"} />
      <LoginButton />
    </div>
  );
}
