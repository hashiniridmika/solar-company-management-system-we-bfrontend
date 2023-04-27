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
import AddNewProductButton from "../common/TopNav/AddNewProductButton";

const rows = [
  {
    id: "A01",
    orderBy: "Olive.J",
    order: "LKR 95000.00",
    orderedDate: "14/02/2023",
    totalPrice: "LKR 234000.00",
    status: "In Stock",
    action: " ",
  },
  {
    id: "A01",
    orderBy: "Olive.J",
    order: "LKR 95000.00",
    orderedDate: "14/02/2023",
    totalPrice: "LKR 234000.00",
    status: "In Stock",
    action: " ",
  },
  {
    id: "A01",
    orderBy: "Olive.J",
    order: "LKR 95000.00",
    orderedDate: "14/02/2023",
    totalPrice: "LKR 234000.00",
    status: "In Stock",
    action: " ",
  },
  {
    id: "A01",
    orderBy: "Olive.J",
    order: "LKR 95000.00",
    orderedDate: "14/02/2023",
    totalPrice: "LKR 234000.00",
    status: "In Stock",
    action: " ",
  },
  {
    id: "A01",
    orderBy: "Olive.J",
    order: "LKR 95000.00",
    orderedDate: "14/02/2023",
    totalPrice: "LKR 234000.00",
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
            <TableCell style={{ fontWeight: "bold" }}>Order ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Ordered By</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Order</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Date</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Total Price</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, key) => (
            <TableRow key={key} hover>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.orderBy}</TableCell>
              <TableCell>{row.orderedDate}</TableCell>
              <TableCell>{row.totalPrice}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.action}</TableCell>
              <TableCell>
                <Grid container>
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
