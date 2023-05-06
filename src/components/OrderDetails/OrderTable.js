import {
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import OrderDetailsDialogBox from "../../layouts/OrderDetails/OrderDetailsDialogBox";

export default function BasicTable() {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const { allOrderList } = useSelector((store) => store.orderReducer);

  const [page, setPage] = useState(1);
  const rowsPerPage = 8;
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

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Order ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Ordered By</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Date</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>
              Total Bill(LKR)
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Payment Type</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrderList.slice(startIndex, endIndex).map((val, key) => (
            <TableRow
              key={key}
              hover
              onClick={() => {
                setSelectedRow(val);
                handleClickOpen();
              }}
              style={
                selectedRow === val
                  ? { backgroundColor: "#E3FFE9", color: "white" }
                  : {}
              }
            >
              <TableCell>
                {val._id.slice(-7).padStart(val._id.length)}
              </TableCell>
              <TableCell>{val.orderBy.agentName}</TableCell>
              <TableCell>{val.orderedDateandTime}</TableCell>
              <TableCell>{val.billValue}</TableCell>
              <TableCell
                style={{ color: val.paymentType === "COD" ? "red" : "green" }}
              >
                {val.paymentType}
              </TableCell>
              <TableCell></TableCell>
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
        <OrderDetailsDialogBox />
      </Dialog>
    </div>
  );
}
