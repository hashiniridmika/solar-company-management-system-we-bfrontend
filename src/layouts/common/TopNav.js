import React from "react";
import TopnavTopic from "./TopNav/TopnavTopic";
import TopSearch from "./TopNav/TopSearch";
import AddNewProductButton from "../../components/common/TopNav/AddNewProductButton";

export default function TopNav() {
  return (
    <div>
      <div>
        <TopnavTopic />
      </div>
      <div>
        <TopSearch />
      </div>
      <div>
        <AddNewProductButton />
      </div>
    </div>
  );
}
