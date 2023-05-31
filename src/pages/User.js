import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import UserDetails from "../layouts/UserDetails/UserDetails";
import TopnavTopic from "../layouts/common/TopNav/TopnavTopic";
import TopSearch from "../layouts/common/TopNav/TopSearch";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgents } from "../store/actions/agentAction";

export default function User() {
  const dispatch = useDispatch();

  const { allAgentList } = useSelector((store) => store.agentReducer);

  useEffect(() => {
    if (allAgentList.length === 0) {
      dispatch(getAllAgents());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
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
