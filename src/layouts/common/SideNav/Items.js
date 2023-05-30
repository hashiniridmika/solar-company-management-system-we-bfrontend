import React from "react";
import Item from "../../../components/common/SideNav/Item";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Items() {
  const { employee } = useSelector((store) => store.employeeReducer);

  console.log(employee);

  const button =
    employee.userType === "admin"
      ? [
          { title: "Dashboard", route: "dashboard" },
          { title: "Product Management", route: "product" },
          { title: "Order Management", route: "order" },
          { title: "Stock Management", route: "stock" },
          { title: "User Management", route: "user" },
        ]
      : [
          // Buttons for non-owner employees
          { title: "Dashboard", route: "dashboard" },
          { title: "Product Management", route: "product" },
          { title: "Order Management", route: "order" },
          { title: "Stock Management", route: "stock" },
          { title: "User Management", route: "user" },
          { title: "Admin Management", route: "admin" },
        ];

  return (
    <div>
      <Grid2 container direction="column">
        {button.map((val, key) => {
          return (
            <div key={key}>
              <NavLink style={{ textDecoration: "none" }} to={`/${val.route}`}>
                {({ isActive, isPending }) => (
                  <Item title={val.title} isActive={isActive} />
                )}
              </NavLink>
            </div>
          );
        })}
      </Grid2>
    </div>
  );
}
