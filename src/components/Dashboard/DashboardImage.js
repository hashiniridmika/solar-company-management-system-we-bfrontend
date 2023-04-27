import React from "react";
import DASHBOARD from "../../assets/images/dashboard.png";

export default function DashboardImage() {
  return (
    <div
      style={{
        position: "relative",
        marginTop: "70px",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <div
        style={{
          backgroundColor: "#EBFAF3",
          borderRadius: 14,
          paddingBottom: 5,
          height: 200,
        }}
      ></div>
      <div style={{ position: "absolute", top: "-23%", right: "10%" }}>
        <img src={DASHBOARD} alt="DashboardImage" style={{ width: "90%" }} />
      </div>
    </div>
  );
}
