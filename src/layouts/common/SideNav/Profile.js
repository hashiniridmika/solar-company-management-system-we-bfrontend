import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import ProfileIcon from "../../../components/common/SideNav/Profile/ProfileIcon";
import ProfileName from "../../../components/common/SideNav/Profile/ProfileName";

export default function Profile() {
  return (
    <div>
      <Grid2 container justifyContent="center">
        <Grid2 Item pr={1}>
          <ProfileIcon />
        </Grid2>
        <Grid2 Item>
          <ProfileName />
        </Grid2>
      </Grid2>
    </div>
  );
}
