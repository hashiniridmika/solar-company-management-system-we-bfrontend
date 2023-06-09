import { Typography } from "@mui/material";
import React from "react";
import CancelButton from "../../components/StockBox/CancelButton";
import DeleteButton from "../../components/StockBox/DeleteButton";

export default function DeleteStockDialogBox() {
  return (
    <div>
      <Typography
        align="center"
        sx={{ pt: 2, fontSize: 30, color: "#00C569", fontFamily: "Poppins" }}
      >
        Do You Want Delete This Stock?
      </Typography>
      <Typography
        align="center"
        sx={{
          padding: 1.5,
          fontSize: 15,
          color: "#6D6D6D",
          fontFamily: "Poppins",
        }}
      >
        Are you sure?
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "30px",
        }}
      >
        <CancelButton />
        <DeleteButton />
      </div>
    </div>
  );
}
