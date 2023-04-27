import React from "react";
import TopicDetails from "../../../components/common/TopNav/TopnavTopic/TopicDetails";

export default function TopnavTopic({ name, content }) {
  return (
    <div>
      <TopicDetails name={name} content={content} />
    </div>
  );
}
