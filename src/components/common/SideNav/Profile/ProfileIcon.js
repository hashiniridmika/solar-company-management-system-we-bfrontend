import { Avatar } from "@mui/material";
import React from "react";

export default function ProfileIcon() {
  return (
    <div>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </div>
  );
}
