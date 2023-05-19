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
        <Typography sx={{ pt: 5, pl: 10 }}>
          <Typography
            sx={{
              color: "#27a567",
              display: "inline",
              pr: "12px",
              fontSize: 32,
            }}
          >
            Welcome
          </Typography>
          <span style={{ color: "#018346", fontWeight: "bold", fontSize: 28 }}>
            Hashini Ridmika
          </span>
          <Typography sx={{ color: "#27a567", paddingTop: "10px" }}>
            "Experience seamless management and enhanced productivity with our
            intuitive"
          </Typography>
        </Typography>
      </div>
      <div style={{ position: "absolute", top: "-23%", right: "10%" }}>
        <img src={DASHBOARD} alt="DashboardImage" style={{ width: "90%" }} />
      </div>
    </div>
  );
}
