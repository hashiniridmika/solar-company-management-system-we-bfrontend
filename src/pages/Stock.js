import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import StockDetails from "../layouts/StockDetails/StockDetails";
import TopnavTopic from "../layouts/common/TopNav/TopnavTopic";
import TopSearch from "../layouts/common/TopNav/TopSearch";

export default function Stock() {
  return (
    <div>
      <CommonLayout>
        <TopnavTopic
          name="Stock Details"
          content="Solar stock management refers to the process of overseeing and controlling the 
        inventory of solar panels, inverters, batteries, and other components used in solar power systems. Effective management 
        of solar stocks involves maintaining accurate records, ensuring adequate supply levels, and minimizing wastage and losses."
        />
        <TopSearch />
        <StockDetails />
      </CommonLayout>
    </div>
  );
}
