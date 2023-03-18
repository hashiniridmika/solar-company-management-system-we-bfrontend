import React from "react";
import LOGIN from "../../assets/images/solarlogo.png";

export default function Logo() {
  return (
    <div>
      <img src={LOGIN} alt="logo" style={{ width: "15%", paddingTop: "5%" }} />
    </div>
  );
}
