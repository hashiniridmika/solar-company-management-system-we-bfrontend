import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import ProductDetails from "../layouts/ProductDetails/ProductDetails";
import TopnavTopic from "../layouts/common/TopNav/TopnavTopic";
import TopSearch from "../layouts/common/TopNav/TopSearch";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductitems } from "../store/actions/productitemAction";

export default function Product() {
  const dispatch = useDispatch();

  const { allProductitemList } = useSelector(
    (store) => store.productItemReducer
  );

  useEffect(() => {
    if (allProductitemList.length === 0) {
      dispatch(getAllProductitems());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
