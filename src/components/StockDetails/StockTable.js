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
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import EditStockDialogBox from "../../layouts/StockDetails/EditStockDialogBox";
import DeleteStockDialogBox from "../../layouts/StockDetails/DeleteStockDialogBox";

import {
  setUserSelectedStock,
  getAllStocks,
} from "../../store/actions/stockAction";

export default function BasicTable() {
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const { allStockList, userSelectedStock } = useSelector(
    (store) => store.stockReducer
  );

  console.log(userSelectedStock);

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const pageCount = Math.ceil(allStockList.length / rowsPerPage);

  const handleClickOpen = (type) => {
    if (type === "edit") {
      setIsEditOpen(true);
    } else if (type === "delete") {
      setIsDeleteOpen(true);
    }
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setIsEditOpen(false);
    setIsDeleteOpen(false);
  };
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  const setvalue = (val) => {
    dispatch(setUserSelectedStock(val));
  };

  useEffect(() => {
    dispatch(getAllStocks());
  }, [dispatch]);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Product ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Category</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Stock</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allStockList.slice(startIndex, endIndex).map((val, key) => (
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
              <TableCell>
                {val.item._id.slice(-5).padStart(val._id.length)}
              </TableCell>
              <TableCell>{val.category.categoryName}</TableCell>
              <TableCell>{val.item.productName}</TableCell>
              <TableCell>{val.stockCount}</TableCell>
              <TableCell>
                {val.stockCount > 0 ? (
                  <div style={{ color: "green" }}>In Stock</div>
                ) : (
                  <div style={{ color: "red" }}>Out of Stock</div>
                )}
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item>
                    <IconButton
                      color="secondary"
                      onClick={() => {
                        handleClickOpen("edit");
                        setvalue(val);
                      }}
                    >
                      <EditOutlinedIcon style={{ color: "#989586" }} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="primary"
                      onClick={() => handleClickOpen("delete")}
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
        sx={{ mt: 2, justifyContent: "flex-end", pr: 2 }}
      >
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          sx={{
            "& .Mui-selected": {
              color: "#00C569",
            },
            mt: 1,
            justifyContent: "flex-end",
            pr: 2,
          }}
        />
      </Stack>
      <Dialog
        open={isDialogOpen}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "45%",
            height: "35%",
          },
        }}
      >
        {isEditOpen && (
          <EditStockDialogBox isOpen={isEditOpen} setIsOpen={setIsEditOpen} />
        )}
        {isDeleteOpen && (
          <DeleteStockDialogBox
            isOpen={isDeleteOpen}
            setIsOpen={setIsDeleteOpen}
          />
        )}
      </Dialog>
    </div>
  );
}
