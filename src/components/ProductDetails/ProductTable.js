import {
  Dialog,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddNewProductButton from "../common/TopNav/AddNewProductButton";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import AddNewProductDialogBox from "../../layouts/ProductDetails/AddNewProductDialogBox";
import EditProductDialogBox from "../../layouts/ProductDetails/EditProductDialogBox";
import DeleteProductDialogBox from "../../layouts/ProductDetails/DeleteProductDialogBox";
import ViewProductFeedbackDialogBox from "../../layouts/ProductDetails/ViewProductFeedbackDialogBox";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import Rating from "@mui/material/Rating";

import {
  setUserSelectedProductitem,
  getAllProductitems,
  clearProductitemUpdateStatus,
  updateProductitem,
  // createProductitem,
} from "../../store/actions/productitemAction";

export default function BasicTable() {
  const dispatch = useDispatch();
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openFeedback, setOpenFeedback] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const {
    allProductitemList,
    userSelectedProductitem,
    productitemUpdateStatus,
    // productitemCreateStatus,
  } = useSelector((store) => store.productItemReducer);

  // console.log(userSelectedProductitem);

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const pageCount = Math.ceil(allProductitemList.length / rowsPerPage);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
    dispatch(clearProductitemUpdateStatus());
    // dispatch(
    //   setUserSelectedProductitem({
    //     productName: "",
    //     productDescription: "",
    //     price: "",
    //     productStockCount: "",
    //     category: "",
    //     productImage: "",
    //   })
    // );
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  // const handleButtonOnClick = () => {
  //   // dispatch(createProductitem(userSelectedProductitem));
  //   setOpenAdd(false);
  // };

  const setvalue = (val) => {
    dispatch(setUserSelectedProductitem(val));
    // dispatch(clearProductitemUpdateStatus());
  };

  const handleOnClick = () => {
    dispatch(updateProductitem(userSelectedProductitem));
    setOpenEdit(false);
  };

  useEffect(() => {
    if (productitemUpdateStatus === "completed") dispatch(getAllProductitems());
  }, [dispatch, productitemUpdateStatus]);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div>
      <AddNewProductButton handleClickOpen={handleClickOpenAdd} />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Product ID
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Product Name
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Price(LKR)
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Rate
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              StockCount
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Catergory
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProductitemList.slice(startIndex, endIndex).map((val, key) => (
            <TableRow
              key={key}
              hover
              onClick={() => {
                setSelectedRow(val);
              }}
              style={
                selectedRow === val
                  ? { backgroundColor: "#E3FFE9", color: "white" }
                  : {}
              }
            >
              <TableCell style={{ fontFamily: "Poppins" }}>
                {val._id.slice(-5).padStart(val._id.length)}
              </TableCell>
              <TableCell style={{ fontFamily: "Poppins" }}>
                {val.productName}
              </TableCell>
              <TableCell style={{ fontFamily: "Poppins" }}>
                {val.price}
              </TableCell>
              <TableCell>
                <Rating
                  name="read-only"
                  size="small"
                  value={val.ratings}
                  precision={0.5}
                  readOnly
                />
              </TableCell>
              <TableCell style={{ fontFamily: "Poppins" }}>
                {val.productStockCount
                  ? val.productStockCount.stockCount
                  : "N/A"}
              </TableCell>
              <TableCell>{val.category.categoryName}</TableCell>
              <TableCell>
                <Grid container>
                  <Grid item>
                    <IconButton>
                      <ChatOutlinedIcon
                        style={{ color: "#6BC8A3" }}
                        onClick={() => {
                          setOpenFeedback(true);
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton color="secondary">
                      <EditOutlinedIcon
                        style={{ color: "#989586" }}
                        onClick={() => {
                          setOpenEdit(true);
                          setvalue(val);
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        setOpenDelete(true);
                      }}
                    >
                      <DeleteForeverIcon style={{ color: "#FAA281" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Stack
        direction="row"
        spacing={1}
        sx={{ mt: 1, justifyContent: "flex-end", pr: 2 }}
      >
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          sx={{
            "& .Mui-selected": {
              color: "#00C569",
            },
            mt: 2,
            justifyContent: "flex-end",
            pr: 2,
          }}
        />
      </Stack>

      <Dialog
        open={openAdd}
        keepMounted
        onClose={() => {
          setOpenAdd(false);
        }}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "55%",
            height: "65%",
          },
        }}
      >
        {openAdd && (
          <AddNewProductDialogBox
            isOpen={openAdd}
            setIsOpen={setOpenAdd}
            // handleButtonOnClick={handleButtonOnClick}
          />
        )}
      </Dialog>
      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "55%",
            height: "65%",
          },
        }}
      >
        <EditProductDialogBox
          isOpen={openEdit}
          setIsOpen={setOpenEdit}
          handleOnClick={handleOnClick}
        />
      </Dialog>
      <Dialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "45%",
            height: "35%",
          },
        }}
      >
        <DeleteProductDialogBox isOpen={openDelete} setIsOpen={setOpenDelete} />
      </Dialog>
      <Dialog
        open={openFeedback}
        onClose={() => setOpenFeedback(false)}
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "55%",
            height: "70%",
          },
        }}
      >
        <ViewProductFeedbackDialogBox
          isOpen={openFeedback}
          setIsOpen={setOpenFeedback}
        />
      </Dialog>
    </div>
  );
}
