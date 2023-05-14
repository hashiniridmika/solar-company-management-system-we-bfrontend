import { Grid, Typography } from "@mui/material";
import React from "react";
import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
import EditUpdateButton from "../../components/StockBox/EditUpdateButton";
import { useDispatch, useSelector } from "react-redux";
import { setUserSelectedStock } from "../../store/actions/stockAction";

export default function EditStockDialogBox({ handleOnClick }) {
  const dispatch = useDispatch();
  const { userSelectedStock } = useSelector((store) => store.stockReducer);
  console.log(userSelectedStock);

  const handleChange = (value, name) => {
    dispatch(setUserSelectedStock({ ...userSelectedStock, [name]: value }));

    console.log(name);
    console.log(value);
  };

  return (
    <div>
      <Typography align="center" sx={{ pt: 2, fontSize: 30, color: "#00C569" }}>
        Edit Stock
      </Typography>
      <Typography
        align="center"
        sx={{ padding: 1.5, fontSize: 13, color: "#6D6D6D" }}
      >
        Edit stock page allows you to update existing stock informations.
      </Typography>

      <Grid container>
        <Grid item xs={4}>
          <AddNewDialogBoxTextfield
            fieldname="Category"
            value={userSelectedStock.category.categoryName}
            name="categoryName"
            handleChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <AddNewDialogBoxTextfield
            fieldname="Product Name"
            value={userSelectedStock.item.productName}
            name="productName"
            handleChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <AddNewDialogBoxTextfield
            fieldname="Stock Count"
            value={userSelectedStock.stockCount}
            name="stockCount"
            handleChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          margin: "auto",
          textAlign: "center",
          justifyContent: "center",
          paddingTop: "28px",
        }}
      >
        <EditUpdateButton handleOnClick={handleOnClick} />
      </Grid>
    </div>
  );
}
