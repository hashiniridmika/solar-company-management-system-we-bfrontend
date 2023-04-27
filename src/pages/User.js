import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import UserDetails from "../layouts/UserDetails/UserDetails";
import TopnavTopic from "../layouts/common/TopNav/TopnavTopic";
import TopSearch from "../layouts/common/TopNav/TopSearch";

export default function User() {
  return (
    <div>
      <CommonLayout>
        <TopnavTopic
          name="User Details"
          content="Managing end-users of solar power systems encompasses customer acquisition, scheduling installations and
           maintenance, billing, payment, and customer service. Effective management promotes a positive provider-customer 
           relationship for greater satisfaction and retention."
        />
        <TopSearch />
        <UserDetails />
      </CommonLayout>
    </div>
  );
}
