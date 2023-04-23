import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, name, price, rate, category, quantity, status, action) {
  return { id, name, price, rate, category, quantity, status, action };
}

const rows = [
  createData(
    "P001",
    "OffGrid",
    "LKR560000.00",
    " ",
    "Panels",
    125,
    "Instok",
    " "
  ),
  createData(
    "P001",
    "OffGrid",
    "LKR560000.00",
    " ",
    "Panels",
    125,
    "Instok",
    " "
  ),
  createData(
    "P001",
    "OffGrid",
    "LKR560000.00",
    " ",
    "Panels",
    125,
    "Instok",
    " "
  ),
  createData(
    "P001",
    "OffGrid",
    "LKR560000.00",
    " ",
    "Panels",
    125,
    "Instok",
    " "
  ),
  createData(
    "P001",
    "OffGrid",
    "LKR560000.00",
    " ",
    "Panels",
    125,
    "Instok",
    " "
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Product ID</TableCell>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Rate</TableCell>
            <TableCell align="left">Catergory</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.rate}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.quantity}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
