import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import ProductDetails from "../layouts/ProductDetails/ProductDetails";
import TopnavTopic from "../layouts/common/TopNav/TopnavTopic";
import TopSearch from "../layouts/common/TopNav/TopSearch";

export default function Product() {
  return (
    <div>
      <CommonLayout>
        <TopnavTopic
          name="Product Details"
          content="Solar product items are devices that harness energy from the sun and convert
           it into usable electricity. These items include solar panels, solar-powered lights, chargers,
            and other products designed to operate on renewable energy. They are eco-friendly, cost-effective,
             and provide a sustainable alternative to traditional energy sources."
        />
        <TopSearch />
        <ProductDetails />
      </CommonLayout>
    </div>
  );
}
