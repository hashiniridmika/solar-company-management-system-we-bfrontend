import React, { useEffect } from "react";
import InputtextboxandToplabel from "../../components/Login/InputtextboxandToplabel";
import LoginButton from "../../components/Login/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import { employeeLogin } from "../../store/actions/employeesAction";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Section() {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { employeeLoginLoadingStatus, loginErroeMessage, employee } =
    useSelector((store) => store.employeeReducer);

  console.log(email, password);

  const navigate = useNavigate();

  const handleOnClick = () => {
    dispatch(employeeLogin(email, password));
  };

  useEffect(() => {
    console.log(employeeLoginLoadingStatus);
    console.log(loginErroeMessage);
    if (employeeLoginLoadingStatus === "sucess") {
      console.log(employee);
      if (employee.userType === "owner") {
        navigate("/dashboard");
      } else if (employee.userType === "admin") {
        navigate("/dashboard");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeLoginLoadingStatus]);

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "30%",
        paddingTop: "3%",
      }}
    >
      <InputtextboxandToplabel
        label="Email Address"
        placeholder="Enter your email"
        handleChange={setEmail}
      />
      <InputtextboxandToplabel
        label="Password"
        placeholder="Enter your password"
        handleChange={setPassword}
      />
      {employeeLoginLoadingStatus === "fail" ? (
        <Typography
          pt={2}
          style={{ color: "red", fontWeight: "bold", fontFamily: "Poppins" }}
        >
          Email or password incorrect
        </Typography>
      ) : (
        ""
      )}

      <div style={{ paddingTop: 20 }}>
        <LoginButton handleOnClick={handleOnClick} />
      </div>
    </div>
  );
}
