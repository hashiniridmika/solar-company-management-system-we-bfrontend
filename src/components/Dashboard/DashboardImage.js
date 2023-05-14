import React from "react";
import DASHBOARD from "../../assets/images/dashboard.png";
import { Typography } from "@mui/material";

export default function DashboardImage() {
  return (
    <div
      style={{
        position: "relative",
        marginTop: "50px",
        paddingLeft: "30px",
        paddingRight: "30px",
        textAlign: "left",
      }}
    >
      <div
        style={{
          backgroundColor: "#EBFAF3",
          borderRadius: 14,
          paddingBottom: 5,
          height: 200,
        }}
      >
        <Typography sx={{ color: "#018346", pt: 5, pl: 10, fontSize: 28 }}>
          Welcome
        </Typography>
      </div>
      <div style={{ position: "absolute", top: "-23%", right: "10%" }}>
        <img src={DASHBOARD} alt="DashboardImage" style={{ width: "90%" }} />
      </div>
    </div>
  );
}
