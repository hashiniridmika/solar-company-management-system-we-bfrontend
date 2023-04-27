import React from "react";
import OrderDetails from "../layouts/OrderDetails/OrderDetails";
import CommonLayout from "../layouts/common/CommonLayout";
import TopnavTopic from "../layouts/common/TopNav/TopnavTopic";
import TopSearch from "../layouts/common/TopNav/TopSearch";

export default function Order() {
  return (
    <div>
      <CommonLayout>
        <TopnavTopic
          name="Order Details"
          content="Solar Order Management is a system used by solar companies to manage the entire solar panel installation process.
          It includes order placement, project management, logistics, and communication with customers. It ensures that installations
          are completed efficiently, on time, and to the satisfaction of both the company and the customer."
        />
        <TopSearch />
        <OrderDetails />
      </CommonLayout>
    </div>
  );
}
