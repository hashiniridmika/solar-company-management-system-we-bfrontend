import React, { useEffect } from "react";
import SideNav from "../layouts/common/SideNav";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DashboardDetails from "../layouts/Dashboard/DashboardDetails";
import { useDispatch, useSelector } from "react-redux";
import { getAllCatergories } from "../store/actions/catergoryAction";

export default function Dashboard() {
  const dispatch = useDispatch();

  const { allCategoryList } = useSelector((store) => store.catergoryReducer);

  useEffect(() => {
    if (allCategoryList.length === 0) {
      dispatch(getAllCatergories());
    }
  }, [allCategoryList.length, dispatch]);

  return (
    <div>
      <Grid2 container>
        <Grid2
          Item
          xs={2}
          style={{ borderRight: "2px solid #D1D1D1", height: "100vh" }}
        >
          <SideNav />
        </Grid2>
        <Grid2 Item xs={10}>
          <DashboardDetails />
        </Grid2>
      </Grid2>
    </div>
  );
}
