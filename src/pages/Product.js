import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import ProductDetails from "../layouts/ProductDetails/ProductDetails";

export default function Product() {
  return (
    <div>
      <CommonLayout>
        <ProductDetails />
      </CommonLayout>
    </div>
  );
}
