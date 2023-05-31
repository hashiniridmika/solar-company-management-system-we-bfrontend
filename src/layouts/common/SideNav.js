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

      <div style={{ paddingTop: 30 }}>
        <Items />
      </div>
      <div
        style={{
          paddingTop: 30,
          paddingBottom: 30,
          width: 250,
        }}
      >
        <Divider variant="middle" />
      </div>
      <StatisticItems />
    </div>
  );
}
