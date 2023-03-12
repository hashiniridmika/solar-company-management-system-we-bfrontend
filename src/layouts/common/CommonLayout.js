import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

export default function CommonLayout({ children }) {
  return (
    <div>
      <Grid2 container>
        <Grid2 Item xs={2} borderRight={2} borderColor="#D1D1D1">
          <SideNav />
        </Grid2>
        <Grid2 Item xs={10}>
          <TopNav />
          {children}
        </Grid2>
      </Grid2>
    </div>
  );
}
