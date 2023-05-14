import React from "react";
import InputtextboxandToplabel from "../../components/Login/InputtextboxandToplabel";
import LoginButton from "../../components/Login/LoginButton";

export default function Section() {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "30%",
        paddingTop: "3%",
      }}
    >
      <InputtextboxandToplabel info={"User name/Email"} />
      <InputtextboxandToplabel info={"Password"} />
      <LoginButton />
    </div>
  );
}
