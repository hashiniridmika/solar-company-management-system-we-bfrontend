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
import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddNewProductButton from "../common/TopNav/AddNewProductButton";
import AddNewProductDialogBox from "../../layouts/ProductDetails/AddNewProductDialogBox";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import EditProductDialogBox from "../../layouts/ProductDetails/EditProductDialogBox";
import DeleteProductDialogBox from "../../layouts/ProductDetails/DeleteProductDialogBox";

export default function BasicTable() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const { allProductitemList } = useSelector(
    (store) => store.productItemReducer
  );

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const pageCount = Math.ceil(allProductitemList.length / rowsPerPage);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div>
      <AddNewProductButton handleClickOpen={handleClickOpenAdd} />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Product ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Price(LKR)</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Rate</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>StockCount</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Catergory</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProductitemList.slice(startIndex, endIndex).map((val, key) => (
            <TableRow key={key} hover>
              <TableCell>
                {val._id.slice(-5).padStart(val._id.length)}
              </TableCell>
              <TableCell>{val.productName}</TableCell>
              <TableCell>{val.price}</TableCell>
              <TableCell>t </TableCell>
              <TableCell>{val.productStockCount.stockCount}</TableCell>
              <TableCell>{val.category.categoryName}</TableCell>
              <TableCell>
                <Grid container>
                  <Grid item>
                    <IconButton color="secondary">
                      <EditOutlinedIcon
                        style={{ color: "#989586" }}
                        onClick={() => {
                          setOpenEdit(true);
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
          <AddNewProductDialogBox isOpen={openAdd} setIsOpen={setOpenAdd} />
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
        <EditProductDialogBox isOpen={openEdit} setIsOpen={setOpenEdit} />
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
    </div>
  );
}
