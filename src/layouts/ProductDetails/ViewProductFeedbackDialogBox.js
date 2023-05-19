import { Typography } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";
import TICK from "../../assets/images/check.png";
// import { styled } from "@mui/material/styles";
// import Rating, { IconContainerProps } from "@mui/material/Rating";
// import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
// import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
// import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
// import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
// import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

export default function ViewProductFeedbackDialogBox() {
  return (
    <div
      style={{
        position: "relative",
        paddingLeft: "25px",
        paddingRight: "25px",
      }}
    >
      <Typography align="center" sx={{ pt: 2, fontSize: 30, color: "#00C569" }}>
        Reviews And Ratings
      </Typography>
      <div
        style={{
          borderRadius: 14,
          height: 100,
          marginBottom: "10px",
          border: "2px solid #EDEDED",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "45px",
            paddingLeft: "10px",
            paddingTop: "10px",
          }}
        >
          <Rating name="read-only" size="small" precision={0.5} readOnly />

          <Typography sx={{ color: "#8E8E8E", fontSize: "12" }}>
            hashini
          </Typography>

          <div style={{ position: "absolute", top: "42%", right: "5%" }}>
            <img src={TICK} alt="feedbackImage" style={{ width: "90%" }} />
          </div>
        </div>
        <Typography sx={{ pl: "10px", pb: "10px", color: "#797979" }}>
          This is really good product.
        </Typography>
      </div>
    </div>
  );
}
