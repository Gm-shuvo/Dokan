import React from "react";
import Products from "../../component/Products/Products";
import HeroCarousel from "../../component/Carousel/HeroCarousel";
import useStyle from "./HomeStyle";

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
      <Products productList={productList} onAddToCart={onAddToCart} />
    </div>
  );
}

export default Home;