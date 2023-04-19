import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import TopSearchField from "../../../components/common/TopNav/TopSearch/TopSearchField";
import TopSearchButton from "../../../components/common/TopNav/TopSearch/TopSearchButton";

export default function TopSearch() {
  return (
    <div style={{ paddingLeft: 30, paddingRight: 30 }}>
      <div
        style={{
          backgroundColor: "#F8F8F8",
          padding: "20px 20px 20px 10px",
          borderRadius: 12,
          paddingLeft: 20,
        }}
      >
        <Grid2 container alignItems="center" justifyContent="left" spacing={3}>
          <Grid2 item>
            <TopSearchField />
          </Grid2>
          <Grid2 item>
            <TopSearchButton />
          </Grid2>
        </Grid2>
      </div>
    </div>
  );
}
