import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import TopnavTopic from "../layouts/common/TopNav/TopnavTopic";
import TopSearch from "../layouts/common/TopNav/TopSearch";
import AdminDetails from "../layouts/Admin/AdminDetails";

export default function Admin() {
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
