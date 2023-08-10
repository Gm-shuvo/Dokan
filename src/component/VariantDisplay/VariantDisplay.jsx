import React from "react";
import useStyles from "./VariantDisplayStyles";

const VariantDisplay = ({ type, values, active, onClickVariant, selectColor }) => {

  const classes = useStyles();
  return (
    <div className={classes.circleContainer}>
      {values.map((value, index) => (
        <div
          key={index}
          className={`${classes.circle} ${
            active === value ? classes.active : ""
          }`}
          style={
            
           type === "color"
              ? { backgroundColor: value }
              : active === value ? { backgroundColor: "#ccc", color: selectColor } : { backgroundColor: "#ccc" }
          }
          onClick={() => onClickVariant(value)} // Call the provided onClick function
        >
          {type === "text" ? value.toUpperCase() : ""}
        </div>
      ))}
    </div>
  );
};
export default VariantDisplay;
