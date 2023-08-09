import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./FeatuerProductsStyle";
import FeatuerCard from "../../component/Card/FeatuerCard.jsx/FeatuerCard";


const FeatuerProducts = () => {
  const classes = useStyles();
  const features = [
    {
      name: "Free Delivery",
      image: "https://cdn.lordicon.com/iejknaed.json",
      description: "Get Free Delivery to anywhere in the country",
    },
    {
      name: "90 Days Return",
      image: "https://cdn.lordicon.com/pimvysaa.json",
      description: "Return your products within 90 Days",
    },
    {
      name: "Secure Payment",
      image: "https://cdn.lordicon.com/nrzqxhfu.json",
      description: "Payment through Card or Bkash, Nogod",
    },
    {
      name: "24/7 Support",
      image: "https://cdn.lordicon.com/cllunfud.json",
      description: "Shop and get support from our team anytime",
    },
  ];
  return (
    <>
    <Grid container className={classes.root}>
      {features?.map((feature, index) => (
        <Grid key={index} item xs={12} sm={6} md={3} className={classes.featureCard}>
          <FeatuerCard feature={feature} />
        </Grid>
      ))}
    </Grid>
  </>
)};

export default FeatuerProducts;
