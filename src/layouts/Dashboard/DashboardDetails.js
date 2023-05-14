import React, { useState } from "react";
import DashboardTop from "../../components/Dashboard/DashboardTop";
import DashboardImage from "../../components/Dashboard/DashboardImage";
import { Dialog, Grid, Typography } from "@mui/material";
import DashboardCategory from "../../components/Dashboard/DashboardCategory";
import DashboardCategoryAddButton from "../../components/Dashboard/DashboardCategoryAddButton";
import DashboardAnaliticImage from "../../components/Dashboard/DashboardAnaliticImage";
import AddCategoryDialogBox from "./AddCategoryDialogBox";
import { useSelector } from "react-redux";
import EditCategoryDialogBox from "./EditCategoryDialogBox";

export default function DashboardDetails() {
  const { allCategoryList } = useSelector((store) => store.catergoryReducer);

  const [openDialog, setOpenDialog] = useState(false);
  const [openNewDialog, setOpenNewDialog] = useState(false);

  return (
    <div>
      <DashboardTop />
      <DashboardImage />
      <div style={{ textAlign: "left" }}>
        <Typography
          sx={{
            color: "#00C569",
            fontSize: 28,
            pl: 4,
            pt: 3,
          }}
        >
          CATEGORY
        </Typography>
      </div>

      <Grid container>
        {allCategoryList.map((val, key) => {
          return (
            <Grid
              item
              xs={1.5}
              key={key}
              onClick={() => setOpenNewDialog(true)}
            >
              <DashboardCategory buttonName={val.categoryName} />
            </Grid>
          );
        })}
        <div onClick={() => setOpenDialog(true)}>
          <DashboardCategoryAddButton />
        </div>
      </Grid>

      <div style={{ textAlign: "left" }}>
        <Typography
          sx={{
            color: "#00C569",
            fontSize: 28,
            pl: 4,
            pt: 3,
          }}
        >
          ANALITIC
        </Typography>
      </div>
      <DashboardAnaliticImage />
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "30%",
            height: "35%",
          },
        }}
      >
        <AddCategoryDialogBox />
      </Dialog>
      <Dialog
        open={openNewDialog}
        onClose={() => setOpenNewDialog(false)}
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "30%",
            height: "35%",
          },
        }}
      >
        <EditCategoryDialogBox />
      </Dialog>
    </div>
  );
}
