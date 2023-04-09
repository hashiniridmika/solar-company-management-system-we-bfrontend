import React from "react";
import Profile from "./SideNav/Profile";
import Items from "./SideNav/Items";
import Divider from "@mui/material/Divider";
import StatisticItems from "./SideNav/StatisticItems";

export default function SideNav() {
  return (
    <div>
      <div style={{ paddingTop: 5 }}>
        <Profile />
      </div>
      <div
        style={{
          textAlign: "left",
          paddingLeft: 20,
          paddingTop: 20,
          fontWeight: "bold",
        }}
      >
        Dashboard
      </div>
      <div style={{ paddingTop: 40 }}>
        <Items />
      </div>
      <div style={{ paddingTop: 40, paddingBottom: 40 }}>
        <Divider />
      </div>
      <StatisticItems />
    </div>
  );
}
