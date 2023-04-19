import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import UserDetails from "../layouts/UserDetails/UserDetails";

export default function User() {
  return (
    <div>
      <CommonLayout>
        <UserDetails />
      </CommonLayout>
    </div>
  );
}
