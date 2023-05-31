import React from "react";
import { useSelector } from "react-redux";

export default function ProfileName() {
  const { employee } = useSelector((store) => store.employeeReducer);
  console.log(employee);
  return <div>{employee.username}</div>;
}
