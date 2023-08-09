import React from "react";
import Products from "../../component/Hotdeals/Hotdeals";
import HeroCarousel from "../../component/Carousel/HeroCarousel";
import useStyle from "./HomeStyle";
import FeatuerProducts from "../../component/FeatuerProducts/FeatuerProducts";
import Hotdeals from "../../component/Hotdeals/Hotdeals";

const Home = ({productList, onAddToCart}) => {
  const classes = useStyle();
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