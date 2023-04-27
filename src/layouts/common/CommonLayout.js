import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SideNav from "./SideNav";

export default function CommonLayout({ children }) {
  return (
    <div>
      <Grid2 container>
        <Grid2
          item
          xs={2}
          style={{ borderRight: "2px solid #D1D1D1", height: "100vh" }}
        >
          <SideNav />
        </Grid2>
        <Grid2 item xs={10}>
          {children}
        </Grid2>
      </Grid2>
    </div>
  );
}
