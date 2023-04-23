import {
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import DeleteSharpIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const rows = [
  {
    id: "001",
    name: "Off- Grid",
    price: "LKR 95000.00",
    rate: " ",
    catergory: "Panel",
    status: "In Stock",
    action: "",
  },
  {
    id: "001",
    name: "Off- Grid",
    price: "LKR 95000.00",
    rate: "  ",
    catergory: "Panel",
    status: "In Stock",
    action: "",
  },
  {
    id: "001",
    name: "Off- Grid",
    price: "LKR 95000.00",
    rate: "  ",
    catergory: "Panel",
    status: "In Stock",
    action: "",
  },
  {
    id: "001",
    name: "Off- Grid",
    price: "LKR 95000.00",
    rate: "  ",
    catergory: "Panel",
    status: "In Stock",
    action: "",
  },
  {
    id: "001",
    name: "Off- Grid",
    price: "LKR 95000.00",
    rate: "  ",
    catergory: "Panel",
    status: "In Stock",
    action: "  ",
  },
];

export default function BasicTable() {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Product ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Price</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Rate</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Catergory</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, key) => (
            <TableRow key={key} hover>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.rate}</TableCell>
              <TableCell>{row.catergory}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.action}</TableCell>
              <TableCell>
                <Grid container justifyContent="center">
                  <Grid item>
                    <IconButton color="secondary">
                      <EditOutlinedIcon style={{ color: "silver" }} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton color="primary">
                      <DeleteSharpIcon style={{ color: "red" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
