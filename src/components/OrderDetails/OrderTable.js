import {
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import OrderDetailsDialogBox from "../../layouts/OrderDetails/OrderDetailsDialogBox";
import OrderStatusButton from "../OrderBox/OrderStatusButton";
import { getAllOrderitemWithQuantity } from "../../store/actions/orderitemWithQuantityAction";

export default function BasicTable({ allOrdersById, getAllOrderByIdLoading }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const { allOrderList } = useSelector((store) => store.orderReducer);

  console.log(allOrderList);

  const [page, setPage] = useState(1);
  const rowsPerPage = 6;
  const pageCount = Math.ceil(allOrderList.length / rowsPerPage);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleorderdata = (order) => {
    dispatch(getAllOrderitemWithQuantity(order._id));
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Order ID
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Ordered By
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Date
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Total Bill(LKR)
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Payment Type
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrderList.slice(startIndex, endIndex).map((val, key) => (
            <TableRow
              key={key}
              hover
              onClick={() => {
                setSelectedRow(val);
                handleClickOpen(val);
                handleorderdata(val);
              }}
              style={
                selectedRow === val
                  ? {
                      backgroundColor: "#E3FFE9",
                      color: "white",
                      fontFamily: "Poppins",
                    }
                  : { fontFamily: "Poppins" }
              }
            >
              <TableCell
                style={
                  selectedRow === val
                    ? { fontFamily: "Poppins" }
                    : { fontFamily: "Poppins" }
                }
              >
                {val._id.slice(-10).padStart(val._id.length)}
              </TableCell>
              <TableCell
                style={
                  selectedRow === val
                    ? { fontFamily: "Poppins" }
                    : { fontFamily: "Poppins" }
                }
              >
                {val.orderBy.agentName}
              </TableCell>
              <TableCell
                style={
                  selectedRow === val
                    ? { fontFamily: "Poppins" }
                    : { fontFamily: "Poppins" }
                }
              >
                {val.orderedDateandTime}
              </TableCell>
              <TableCell
                style={
                  selectedRow === val
                    ? { fontFamily: "Poppins" }
                    : { fontFamily: "Poppins" }
                }
              >
                {val.billValue}
              </TableCell>
              <TableCell
                style={{
                  fontFamily: "Poppins",
                  color:
                    val.paymentType === "cashOnDelivery"
                      ? "red"
                      : val.paymentType === "cardPayment"
                      ? "#00C569"
                      : val.paymentType === "bankTransfer"
                      ? "blue"
                      : "inherit", // fallback color if paymentType doesn't match any condition
                }}
              >
                {val.paymentType}
              </TableCell>
              <TableCell style={{ fontFamily: "Poppins" }}>
                {val.orderStatus === "Pending" ? (
                  <OrderStatusButton name="Pending" backgroundColor="#FFFF8A" />
                ) : val.orderStatus === "Processing" ? (
                  <OrderStatusButton
                    name="Processing"
                    backgroundColor="#b9d2ee"
                  />
                ) : val.orderStatus === "Cancel" ? (
                  <OrderStatusButton name="Cancel" backgroundColor="#ff6b6b" />
                ) : val.orderStatus === "Shipping" ? (
                  <OrderStatusButton
                    name="Shipping"
                    backgroundColor="#e8bcf0"
                  />
                ) : val.orderStatus === "Completed" ? (
                  <OrderStatusButton
                    name="Completed"
                    backgroundColor="#a9ffa9"
                  />
                ) : null}
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
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "55%",
            height: "55%",
          },
        }}
      >
        <OrderDetailsDialogBox
          allOrdersById={allOrdersById}
          getAllOrderByIdLoading={getAllOrderByIdLoading}
        />
      </Dialog>
    </div>
  );
}
