import React from "react";
import Products from "../../component/Hotdeals/Hotdeals";
import HeroCarousel from "../../component/Carousel/HeroCarousel";
import useStyle from "./HomeStyle";
import FeatuerProducts from "../../component/FeatuerProducts/FeatuerProducts";
import Hotdeals from "../../component/Hotdeals/Hotdeals";

import { useCommerce } from "../../context/api/CommerceProvider";

const Home = () => {
  const classes = useStyle();
  const { products: productList, handleAddcart: onAddToCart  } = useCommerce();
  console.log(productList);
  
  // productList.map((product) => {
  //   return productImgs.push(product.media.source);
  // });
  // console.log(productImgs);

  // const carouselMobileBehavior = {
  //   showArrows: false,
  //   showStatus: false,
  // };
  return (
    <div className={classes.root}>
      <HeroCarousel/>
      <FeatuerProducts/>
      <Hotdeals productList={productList} onAddToCart={onAddToCart} />
    </div>
  );
}

export default Home;