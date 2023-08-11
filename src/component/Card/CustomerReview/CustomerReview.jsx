import React from "react";
import useStyles from "./CustomerReviewStyles";

const CustomerReview = ({ review }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img src={review.image} alt={review.name} />
      </div>
      <div className={classes.reviewContainer}>
        <div className={classes.name}>{review.name}</div>
        <div className={classes.email}>{review.email}</div>
        <div className={classes.review}>{review.reviews}</div>
        <div className={classes.line}></div>
      </div>
    </div>
  );
};

export default CustomerReview;
