import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddNewProductButton from "../common/TopNav/AddNewProductButton";

const rows = [
  {
    id: "001",
    name: "Off- Grid",
    price: "LKR 95000.00",
    catergory: "Panel",
    stock: "100",
    status: "In Stock",
    action: " ",
  },
  {
    id: "001",
    name: "Off- Grid",
    price: "LKR 95000.00",
    catergory: "Panel",
    stock: "100",
    status: "In Stock",
    action: " ",
  },
  {
    id: "001",
    name: "Off- Grid",
    price: "LKR 95000.00",
    catergory: "Panel",
    stock: "100",
    status: "In Stock",
    action: " ",
  },
  {
    id: "001",
    name: "Off- Grid",
    price: "LKR 95000.00",
    catergory: "Panel",
    stock: "100",
    status: "In Stock",
    action: " ",
  },
  {
    id: "001",
    name: "Off- Grid",
    price: "LKR 95000.00",
    catergory: "Panel",
    stock: "100",
    status: "In Stock",
    action: " ",
  },
];

export default function BasicTable() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AddNewProductButton handleClickOpen={handleClickOpen} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Product ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Price</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Catergory</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Stock</TableCell>
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
              <TableCell>{row.catergory}</TableCell>
              <TableCell>{row.stock}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <Grid container>
                  <Grid item>
                    <IconButton color="secondary">
                      <EditOutlinedIcon style={{ color: "#989586" }} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton color="primary">
                      <DeleteForeverIcon style={{ color: "#FAA281" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
