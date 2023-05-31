import { Typography } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";
// import TICK from "../../assets/images/check.png";

export default function ViewProductFeedbackDialogBox() {
  return (
    <div
      style={{
        position: "relative",
        paddingLeft: "25px",
        paddingRight: "25px",
      }}
    >
      <Typography
        align="center"
        sx={{ pt: 2, fontSize: 30, color: "#00C569", fontFamily: "Poppins" }}
      >
        Reviews And Ratings
      </Typography>
      {/* 1 */}
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
          <Rating name="simple-controlled" size="small" value={3} />

          <Typography
            sx={{
              color: "#8E8E8E",
              fontSize: "12",
              paddingLeft: "80px",
              fontFamily: "Poppins",
            }}
          >
            Neutral
          </Typography>
          <Typography
            sx={{ color: "black", fontSize: "80%", fontFamily: "Poppins" }}
          >
            hashini
          </Typography>

          {/* <div style={{ position: "absolute", top: "42%", right: "5%" }}>
            <img src={TICK} alt="feedbackImage" style={{ width: "90%" }} />
          </div> */}
        </div>
        <Typography
          sx={{
            pl: "10px",
            pb: "10px",
            color: "#666362",
            paddingTop: "10px",
            fontFamily: "Poppins",
          }}
        >
          Solar product and service were satisfactory, but improvements could be
          made in efficiency.
        </Typography>
      </div>
      {/* 2 */}

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
          <Rating name="simple-controlled" size="small" value={2} />

          <Typography
            sx={{
              color: "#8E8E8E",
              fontSize: "12",
              paddingLeft: "80px",
              fontFamily: "Poppins",
            }}
          >
            Negative
          </Typography>
          <Typography
            sx={{ color: "black", fontSize: "80%", fontFamily: "Poppins" }}
          >
            shakuvi
          </Typography>

          {/* <div style={{ position: "absolute", top: "42%", right: "5%" }}>
            <img src={TICK} alt="feedbackImage" style={{ width: "90%" }} />
          </div> */}
        </div>
        <Typography
          sx={{
            pl: "10px",
            pb: "10px",
            color: "#666362",
            paddingTop: "10px",
            fontFamily: "Poppins",
          }}
        >
          The solar product was subpar, and the service was unprofessional.
          Dissatisfied with the overall experience.
        </Typography>
      </div>
      {/* 3 */}
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
          <Rating name="simple-controlled" size="small" value={5} />

          <Typography
            sx={{
              color: "#8E8E8E",
              fontSize: "12",
              paddingLeft: "80px",
              fontFamily: "Poppins",
            }}
          >
            Positive
          </Typography>
          <Typography
            sx={{ color: "black", fontSize: "80%", fontFamily: "Poppins" }}
          >
            aqeeM
          </Typography>

          {/* <div style={{ position: "absolute", top: "42%", right: "5%" }}>
            <img src={TICK} alt="feedbackImage" style={{ width: "90%" }} />
          </div> */}
        </div>
        <Typography
          sx={{
            pl: "10px",
            pb: "10px",
            color: "#666362",
            paddingTop: "10px",
            fontFamily: "Poppins",
          }}
        >
          This is really good product.
        </Typography>
      </div>
      {/* 4 */}
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
          <Rating name="simple-controlled" size="small" value={4} />

          <Typography
            sx={{
              color: "#8E8E8E",
              fontSize: "12",
              paddingLeft: "80px",
              fontFamily: "Poppins",
            }}
          >
            Positive
          </Typography>
          <Typography
            sx={{ color: "black", fontSize: "80%", fontFamily: "Poppins" }}
          >
            dinitha
          </Typography>

          {/* <div style={{ position: "absolute", top: "42%", right: "5%" }}>
            <img src={TICK} alt="feedbackImage" style={{ width: "90%" }} />
          </div> */}
        </div>
        <Typography
          sx={{
            pl: "10px",
            pb: "10px",
            color: "#666362",
            paddingTop: "10px",
            fontFamily: "Poppins",
          }}
        >
          The solar product exceeded expectations, and the service was
          outstanding. Highly satisfied with the overall experience.
        </Typography>
      </div>
    </div>
  );
}
