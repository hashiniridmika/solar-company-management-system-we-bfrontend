import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";

export default function AdminTable() {
  const { allEmployeesList } = useSelector((store) => store.employeeReducer);

  console.log(allEmployeesList);
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Admin ID
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Admin Name
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Username
            </TableCell>
            <TableCell style={{ fontWeight: "bold", fontFamily: "Poppins" }}>
              Email Address
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allEmployeesList.map((val, key) => {
            return (
              <TableRow key={key}>
                <TableCell style={{ fontFamily: "Poppins" }}>
                  {val._id.slice(-7).padStart(val._id.length)}
                </TableCell>
                <TableCell style={{ fontFamily: "Poppins" }}>
                  {val.name}
                </TableCell>
                <TableCell style={{ fontFamily: "Poppins" }}>
                  {val.username}
                </TableCell>
                <TableCell style={{ fontFamily: "Poppins" }}>
                  {val.emailAddress}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
