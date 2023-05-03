import { Typography } from "@mui/material";
import React from "react";
import CancelUserButton from "../../components/UserBox/CancelUserButton";
import DeleteUserButton from "../../components/UserBox/DeleteUserButton";

export default function DeleteUserDialogBox() {
  return (
    <div>
      <Typography align="center" sx={{ pt: 2, fontSize: 30, color: "#00C569" }}>
        Do You Want Delete This User?
      </Typography>
      <Typography
        align="center"
        sx={{ padding: 1.5, fontSize: 16, color: "#6D6D6D" }}
      >
        Are you sure?
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "25px",
          paddingBottom: "5px",
        }}
      >
        <CancelUserButton />
        <DeleteUserButton />
      </div>
    </div>
  );
}
