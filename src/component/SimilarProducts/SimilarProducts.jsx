import React from "react";
import useStyles from "./SimilarProductsStyles";
import { Grid, Typography } from "@material-ui/core";
import Product from "../Card/ProductCard/Product";

const SimilarPorducts = ({ related_products, handleAddcart }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.headingContainer}>
        <lord-icon
          src="https://cdn.lordicon.com/tqywkdcz.json"
          trigger="loop"
          className={classes.lordIcon}
          style={{ width: "50px", height: "50px" }}
        />
        <Typography
          variant="h6"
          component="h4"
          className={classes.textGradient}
        >
          Similar Products
        </Typography>
      </div>
      <Grid container spacing={3}>
        {related_products?.slice(0, 4)?.map((product, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <Product product={product} onAddToCart={handleAddcart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SimilarPorducts;
