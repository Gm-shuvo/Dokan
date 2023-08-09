import React from "react";
import useStyle from "./FeatuerCardStyle";
import { Typography } from "@material-ui/core";
const FeatuerCard = ({feature}) => {
  const classes = useStyle();
  
  return (
    <div className={classes.featureCardWrapper}>
      <div className={classes.featureCardIcon}>
        <lord-icon
          src={feature.image}
          trigger="loop"
          colors="primary:#121331,secondary:#08a88a"
          style={{ width: "100px", height: "100px" }}
        ></lord-icon>
      </div>
      <Typography variant="h6" className={classes.featureCardTitle}>
        {feature.name}
      </Typography>
      <Typography variant="body2" className={classes.featureCardDescription}>
        {feature.description}
      </Typography>
    </div>
  );
};

export default FeatuerCard;
