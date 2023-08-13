import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

import Product from "../Card/ProductCard/Product";
import useStyles from "./HotdealsStyles";
import { useCommerce } from "../../context/api/CommerceProvider";

const Hotdeals = () => {
  const classes = useStyles(); // Initialize the styles
  const { fetchData, handleAddcart } = useCommerce();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await fetchData();
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  },[]);

  return (
    <section className={classes.section}>
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
          Hot Deals
        </Typography>
      </div>
      <Grid container spacing={3}>
        {productList?.slice(0, 8)?.map((product, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <Product product={product} onAddToCart={handleAddcart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.seeMoreLink}>
        <Link to="/products">
          <Typography variant="h6" className={classes.seeMoreLink}>
            See More
          </Typography>
          <lord-icon
            target="a"
            src="https://cdn.lordicon.com/zmkotitn.json"
            trigger="hover"
            color="primary"
            style={{ width: "18px", height: "18px" }}
          />
        </Link>
      </div>
    </section>
  );
};

export default Hotdeals;
