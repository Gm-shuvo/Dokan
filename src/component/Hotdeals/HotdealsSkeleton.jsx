import React from "react";
import { Grid } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from "./HotdealsStyles";

const HotdealsSkeleton = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.headingContainer}>
        <Skeleton
          variant="rect"
          className={classes.lordIcon}
          style={{ width: "50px", height: "50px" }}
        />
        <Skeleton
          variant="text"
          className={classes.textGradient}
          style={{ width: "120px", height: "24px" }}
        />
      </div>
      <Grid container spacing={3}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <Skeleton variant="rect" height={300} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.seeMoreLink}>
        <Skeleton
          variant="text"
          className={classes.seeMoreLink}
          style={{ width: "80px", height: "24px" }}
        />
        <Skeleton
          variant="rect"
          style={{ width: "18px", height: "18px" }}
        />
      </div>
    </section>
  );
};

export default HotdealsSkeleton;
