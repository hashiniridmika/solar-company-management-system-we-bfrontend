import { Grid, Typography } from "@mui/material";
import React from "react";
//import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
import OrderStatusSelectBox from "../../components/OrderBox/OrderStatusSelectBox";
import OrderSaveButton from "../../components/OrderBox/OrderSaveButton";
import { useSelector } from "react-redux";

export default function OrderDetailsDialogBox() {
  const { allOrderitemWithQuantityList } = useSelector(
    (store) => store.orderitemWithQuantityReducer
  );

  console.log(allOrderitemWithQuantityList);
  return (
    <div>
      <Typography align="center" sx={{ pt: 2, fontSize: 30, color: "#00C569" }}>
        Order Details
      </Typography>
      <Typography
        align="center"
        sx={{ padding: 1.5, fontSize: 13, color: "#6D6D6D" }}
      >
        Welcome to the "Order Details" page. View and manage customer orders,
        update status and export data.
      </Typography>

      <Grid container>
        <Grid item xs={4} sx={{ pt: "20px", pl: "40px", spacing: "20" }}>
          <Typography sx={{ fontFamily: "Poppins" }}>Order Products</Typography>
          {/* Display the items under the product item Typography */}
          {allOrderitemWithQuantityList.map((val, key) => (
            <Typography
              key={key}
              sx={{
                fontFamily: "Poppins",
                paddingTop: "20px",
                color: "#808080",
              }}
            >
              {val.item.productName}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={4} sx={{ pt: "20px", pl: "20px" }}>
          <Typography sx={{ fontFamily: "Poppins" }}>Quantity</Typography>
          {/* Display the quantities */}
          {allOrderitemWithQuantityList.map((val, key) => (
            <Typography
              key={key}
              sx={{
                fontFamily: "Poppins",
                paddingTop: "20px",
                color: "#808080",
              }}
            >
              {val.quantity}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={4}>
          <OrderStatusSelectBox fieldintro="Order Status" />
          <OrderSaveButton />
        </Grid>
      </Grid>
    </div>
  );
}
