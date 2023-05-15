import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
import AddNewProductDialogBooxSelectBox from "../../components/AddNewBox/AddNewProductDialogBooxSelectBox";
import EditProductButton from "../../components/AddNewBox/EditProductButton";
import AddImageUploadButton from "../../components/AddNewBox/AddImageUploadButton";
import { useDispatch, useSelector } from "react-redux";
import { setUserSelectedProductitem } from "../../store/actions/productitemAction";

export default function EditProductDialogBox() {
  const dispatch = useDispatch();
  const { userSelectedProductitem } = useSelector(
    (store) => store.productItemReducer
  );

  const handleChange = (value, name) => {
    dispatch(
      setUserSelectedProductitem({ ...userSelectedProductitem, [name]: value })
    );

    console.log(name);
    console.log(value);
  };

  console.log(userSelectedProductitem);
  return (
    <div>
      <Typography align="center" sx={{ pt: 2, fontSize: 30, color: "#00C569" }}>
        Edit Product
      </Typography>
      <Typography
        align="center"
        sx={{ padding: 1.5, fontSize: 13, color: "#6D6D6D" }}
      >
        Maximize your product's potential. Edit its page to showcase its
        features and attract potential buyers.
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <AddNewDialogBoxTextfield
            fieldname="Product Name"
            placeholder="Enter Product Name"
            value={userSelectedProductitem.productName}
            name="productName"
            handleChange={handleChange}
          />
          <AddNewDialogBoxTextfield
            fieldname="Description"
            placeholder="Enter Description"
            value={userSelectedProductitem.productDescription}
            name="productDescription"
            handleChange={handleChange}
            rows={4}
          />
          <Grid container>
            <Grid item xs={6}>
              <AddNewDialogBoxTextfield
                fieldname="Price(LKR)"
                placeholder="Enter Price"
                value={userSelectedProductitem.price}
                name="price"
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <AddNewDialogBoxTextfield
                fieldname="Stock Count"
                placeholder="Enter Count"
                value={userSelectedProductitem.productStockCount.stockCount}
                name="productStockCount.stockCount"
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5} sx={{ paddingRight: 4 }}>
          <Typography
            color="#000000"
            fontSize={14}
            style={{
              paddingLeft: "20px",
              paddingTop: "20px",
              paddingRight: "20px",
            }}
          >
            Upload Product Images
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              paddingLeft: 2,
            }}
          >
            <AddImageUploadButton />
            <AddImageUploadButton />
            <AddImageUploadButton />
          </Box>

          <AddNewProductDialogBooxSelectBox fieldintro="Select Category" />

          <EditProductButton />
        </Grid>
      </Grid>
    </div>
  );
}
