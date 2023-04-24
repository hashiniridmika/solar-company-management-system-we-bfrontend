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
    id: "1010",
    name: "Oliver R.",
    username: "oliver",
    email: "oliver@gmail.com",
    mobileNumber: "+94778978876",
    companyName: "Solar Tech pvt Lmt.",
    companyAddress: "Solar Tech,No 74/Colombo 06",
    action: " ",
  },
  {
    id: "1010",
    name: "Oliver R.",
    username: "oliver",
    email: "oliver@gmail.com",
    mobileNumber: "+94778978876",
    companyName: "Solar Tech pvt Lmt.",
    companyAddress: "Solar Tech,No 74/Colombo 06",
    action: " ",
  },
  {
    id: "1010",
    name: "Oliver R.",
    username: "oliver",
    email: "oliver@gmail.com",
    mobileNumber: "+94778978876",
    companyName: "Solar Tech pvt Lmt.",
    companyAddress: "Solar Tech,No 74/Colombo 06",
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
            <TableCell style={{ fontWeight: "bold" }}>Agent ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Agent Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Username</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Email Address</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Mobile Number</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Company Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>
              Company Address
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, key) => (
            <TableRow key={key} hover>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.mobileNumber}</TableCell>
              <TableCell>{row.companyName}</TableCell>
              <TableCell>{row.companyAddress}</TableCell>
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
