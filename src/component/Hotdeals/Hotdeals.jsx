import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

import Product from "../Card/ProductCard/Product";
import useStyles from "./HotdealsStyles";

const Hotdeals = ({ productList, handleAddcart, isLoading }) => {
  const classes = useStyles(); // Initialize the styles

  return (
    <>
      <section className={classes.section}>
        <div className={classes.headingContainer}>
          <Typography
            variant="h4"
            className={classes.textGradient}
            component={Link}
            to="/"
          >
            Hot Deals
          </Typography>
        </div>
        <Grid container spacing={3}>
          {productList.map((product) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={product.id}>
              <Product product={product} onAddToCart={handleAddcart} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.seeMoreLink}>
          <Typography
            variant="body1"
            className={classes.textGradient}
            component={Link}
            to="/"
          >
            See More
          </Typography>
        </div>
      </section>
    </>
  );
};

export default Hotdeals;
