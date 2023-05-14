import React from "react";
import ANALITIC from "../../assets/images/analitic.png";
import SENTI from "../../assets/images/sentiBar.png";
import { Typography } from "@mui/material";

export default function DashboardAnaliticImage() {
  return (
    <div
      style={{
        position: "relative",
        marginTop: "30px",
        paddingLeft: "30px",
        paddingRight: "30px",
        textAlign: "left",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 14,
          paddingBottom: 2,
          height: 180,
          boxShadow: "2px 2px 2px 2px rgba(0.1, 0.1, 0.1, 0.1)",
        }}
      >
        <Typography sx={{ color: "#7B7B7B", pt: 2, pl: 10 }}>
          COMMUNITY SENTIMENT
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            pt: 1,
            pl: 10,
            fontWeight: "bold",
            fontSize: 22,
          }}
        >
          Overwhelmingly positive
        </Typography>
      </div>
      <div style={{ position: "absolute", bottom: "4%", left: "9%" }}>
        <img src={SENTI} alt="SenimantBarImage" style={{ width: "80%" }}></img>
      </div>

      <div style={{ position: "absolute", bottom: "3%", right: "10%" }}>
        <img src={ANALITIC} alt="AnaliticImage" style={{ width: "80%" }} />
      </div>
    </div>
  );
}
