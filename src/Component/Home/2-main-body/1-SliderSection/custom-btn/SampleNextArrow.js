import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  // console.log(className);
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#FF5421",
        font: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <ArrowForwardIcon />
    </div>
  );
};

export default SampleNextArrow;
