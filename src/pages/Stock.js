import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import StockDetails from "../layouts/StockDetails/StockDetails";

export default function Stock() {
  return (
    <div>
      <CommonLayout>
        <StockDetails />
      </CommonLayout>
    </div>
  );
}
