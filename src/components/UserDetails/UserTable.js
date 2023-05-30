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
import AddNewProductButton from "../common/TopNav/AddNewProductButton";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import AddNewUserDialogBox from "../../layouts/UserDetails/AddNewUserDialogBox";
import EditUserDialogBox from "../../layouts/UserDetails/EditUserDialogBox";
import DeleteUserDialogBox from "../../layouts/UserDetails/DeleteUserDialogBox";

import {
  setUserSelectedAgent,
  getAllAgents,
  clearAgentUpdateStatus,
  updateAgent,
  createAgent,
} from "../../store/actions/agentAction";

export default function BasicTable() {
  const dispatch = useDispatch();
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const {
    allAgentList,
    agentUpdateStatus,
    userSelectedAgent,
    agentCreateStatus,
  } = useSelector((store) => store.agentReducer);

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const pageCount = Math.ceil(allAgentList.length / rowsPerPage);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
    dispatch(clearAgentUpdateStatus());
    dispatch(
      setUserSelectedAgent({
        agentName: "",
        companyAddress: "",
        emailAddress: "",
        image: "",
        mobileNumber: "",
        password: "",
        username: "",
      })
    );
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleButtonOnClick = () => {
    dispatch(createAgent(userSelectedAgent));
    setOpenAdd(false);
  };

  const setvalue = (val) => {
    dispatch(setUserSelectedAgent(val));
    dispatch(clearAgentUpdateStatus());
  };

  const handleOnClick = () => {
    dispatch(updateAgent(userSelectedAgent));
    setOpenEdit(false);
  };

  useEffect(() => {
    if (agentUpdateStatus === "completed" || agentCreateStatus === "success") {
      dispatch(getAllAgents());
    }
  }, [dispatch, agentUpdateStatus, agentCreateStatus]);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div>
      <AddNewProductButton handleClickOpen={handleClickOpenAdd} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Agent ID
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Agent Name
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Username
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Password
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Email Address
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Mobile Number
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Company Address
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allAgentList.slice(startIndex, endIndex).map((val, key) => (
            <TableRow
              key={key}
              hover
              onClick={() => {
                setSelectedRow(val);
              }}
              style={
                selectedRow === val
                  ? { backgroundColor: "#E3FFE9", color: "white" }
                  : { fontFamily: "Poppins" }
              }
            >
              <TableCell style={{ fontFamily: "Poppins" }}>
                {val._id.slice(-7).padStart(val._id.length)}
              </TableCell>
              <TableCell style={{ fontFamily: "Poppins" }}>
                {val.agentName}
              </TableCell>
              <TableCell style={{ fontFamily: "Poppins" }}>
                {val.username}
              </TableCell>
              <TableCell style={{ fontFamily: "Poppins" }}>
                {val.password}
              </TableCell>
              <TableCell style={{ fontFamily: "Poppins" }}>
                {val.emailAddress}
              </TableCell>
              <TableCell style={{ fontFamily: "Poppins" }}>
                {val.mobileNumber}
              </TableCell>
              <TableCell style={{ fontFamily: "Poppins" }}>
                {val.companyAddress}
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid item>
                    <IconButton
                      color="secondary"
                      onClick={() => {
                        setOpenEdit(true);
                        setvalue(val);
                      }}
                    >
                      <EditOutlinedIcon style={{ color: "#989586" }} />
                    </IconButton>

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
        open={openAdd}
        keepMounted
        onClose={() => {
          setOpenAdd(false);
        }}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "60%",
            height: "75%",
          },
        }}
      >
        {openAdd && (
          <AddNewUserDialogBox
            isOpen={openAdd}
            setIsOpen={setOpenAdd}
            handleButtonOnClick={handleButtonOnClick}
          />
        )}
      </Dialog>

      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "55%",
            height: "75%",
          },
        }}
      >
        <EditUserDialogBox
          isOpen={openEdit}
          setIsOpen={setOpenEdit}
          handleOnClick={handleOnClick}
        />
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
        <DeleteUserDialogBox isOpen={openDelete} setIsOpen={setOpenDelete} />
      </Dialog>
    </div>
  );
}
