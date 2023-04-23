import React from "react";
import DASHBOARD from "../../assets/images/dashboard.png";

export default function DashboardImage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "#EBFAF3",
        borderRadius: 14,
        paddingBottom: 15,
      }}
    >
      <div>
        <img
          src={DASHBOARD}
          alt="DashboardImage"
          style={{ width: "65%", paddingRight: 140 }}
        />
      </div>
    </div>
  );
}
