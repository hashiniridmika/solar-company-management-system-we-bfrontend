import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import TopnavTopic from "../layouts/common/TopNav/TopnavTopic";
import TopSearch from "../layouts/common/TopNav/TopSearch";
import AdminDetails from "../layouts/Admin/AdminDetails";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../store/actions/employeesAction";

export default function Admin() {
  const dispatch = useDispatch();

  const { allEmployeesList } = useSelector((store) => store.employeeReducer);

  useEffect(() => {
    if (allEmployeesList.length === 0) {
      dispatch(getAllEmployees());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  console.log(allEmployeesList);

  return (
    <div>
      <CommonLayout>
        <TopnavTopic
          name="All User Details"
          content="The All User Details page displays comprehensive information about users, including their profiles, preferences, and activity history, facilitating effective user management and analysis."
        />
        <TopSearch />
        <AdminDetails />
      </CommonLayout>
    </div>
  );
}
