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
import { useSelector } from "react-redux";
import AddNewUserDialogBox from "../../layouts/UserDetails/AddNewUserDialogBox";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicTable() {
  const [open, setOpen] = React.useState(false);
  const { allAgentList } = useSelector((store) => store.agentReducer);

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const pageCount = Math.ceil(allAgentList.length / rowsPerPage);

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
      <AddNewProductButton handleClickOpen={handleClickOpen} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Agent ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Agent Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Username</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Password</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Email Address</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Mobile Number</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>
              Company Address
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allAgentList.slice(startIndex, endIndex).map((val, key) => (
            <TableRow key={key} hover>
              <TableCell>
                {val._id.slice(-7).padStart(val._id.length)}
              </TableCell>
              <TableCell>{val.agentName}</TableCell>
              <TableCell>{val.username}</TableCell>
              <TableCell>{val.password}</TableCell>
              <TableCell>{val.emailAddress}</TableCell>
              <TableCell>{val.mobileNumber}</TableCell>
              <TableCell>{val.companyAddress}</TableCell>
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
            height: "75%",
          },
        }}
      >
        <AddNewUserDialogBox />
      </Dialog>
    </div>
  );
}
