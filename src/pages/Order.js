import React from "react";
import OrderDetails from "../layouts/OrderDetails/OrderDetails";
import CommonLayout from "../layouts/common/CommonLayout";

export default function Order() {
  return (
    <div>
      <CommonLayout>
        <OrderDetails />
      </CommonLayout>
    </div>
  );
}
