import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AddNewDialogBoxTextfield from "../../components/AddNewBox/AddNewDialogBoxTextfield";
import AddNewDialogBoxButton from "../../components/AddNewBox/AddNewDialogBoxButton";
import AddNewProductDialogBooxSelectBox from "../../components/AddNewBox/AddNewProductDialogBooxSelectBox";
import AddImageUploadButton from "../../components/AddNewBox/AddImageUploadButton";
// import { useDispatch, useSelector } from "react-redux";
// import { setUserSelectedProductitem } from "../../store/actions/productitemAction";

export default function AddNewProductDialogBox() {
  // const dispatch = useDispatch();
  // const { userSelectedProductitem } = useSelector(
  //   (store) => store.productitemReducer
  // );
  // console.log(userSelectedProductitem);

  // const handleChange = (value, name) => {
  //   dispatch(
  //     setUserSelectedProductitem({ ...userSelectedProductitem, [name]: value })
  //   );
  // };

  return (
    <div>
      <Typography align="center" sx={{ pt: 2, fontSize: 30, color: "#00C569" }}>
        Add New Product
      </Typography>
      <Typography
        align="center"
        sx={{
          padding: 1.5,
          fontSize: 13,
          color: "#6D6D6D",
          fontFamily: "Poppins",
        }}
      >
        Grow Your Business: Showcase Your Latest Offering and Reach a Wider
        Audience by Adding Your Product to Our Diverse and Curated Collection.
        Start Selling Today!
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <AddNewDialogBoxTextfield
            fieldname="Product Name"
            placeholder="Enter Product Name"
            // handleChange={handleChange}
            // name="productName"
          />
          <AddNewDialogBoxTextfield
            fieldname="Description"
            placeholder="Enter Description"
            rows={4}
            // handleChange={handleChange}
            // name="productDescription"
          />
          <Grid container>
            <Grid item xs={6}>
              <AddNewDialogBoxTextfield
                fieldname="Price(LKR)"
                placeholder="Enter Price"
                // handleChange={handleChange}
                // name="price"
              />
            </Grid>
            <Grid item xs={6}>
              <AddNewDialogBoxTextfield
                fieldname="Stock Count"
                placeholder="Enter Count"
                // handleChange={handleChange}
                // name="productStockCount"
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
              fontFamily: "Poppins",
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

          <AddNewDialogBoxButton />
        </Grid>
      </Grid>
    </div>
  );
}
