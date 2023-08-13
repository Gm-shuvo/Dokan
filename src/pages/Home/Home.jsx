import React, { useEffect, useState } from "react";
import HeroCarousel from "../../component/Carousel/HeroCarousel";
import useStyle from "./HomeStyle";
import FeatuerProducts from "../../component/FeatuerProducts/FeatuerProducts";
import Hotdeals from "../../component/Hotdeals/Hotdeals";

import { useCommerce } from "../../context/api/CommerceProvider";
import { useGlobalLoader } from "../../context/loader/GlobalLoader";
import DiscountCard from "../../component/Card/DiscountCard/DiscountCard";
import Loader from "../../component/Loader/Loader";
import { useScrollToTop } from "../../hooks/useScrollTop";

const Home = React.memo(() => {
  const classes = useStyle();
  const { fetchData, handleAddcart } = useCommerce();
  const [productList, setProductList] = useState([]);
  const { isLoading, showLoader, hideLoader } = useGlobalLoader();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      try {
        showLoader();
        const { data } = await fetchData();
        if (isMounted) {
          setProductList(data);
          hideLoader();
          // setLoading(false); // Set loading to false when data is fetched
        }
      } catch (error) {
        console.log(error);
        if (isMounted) {
          hideLoader();
          // setLoading(false); // Set loading to false on error as well
        }
      }
    };
    fetchProducts();

    return () => {
      isMounted = false; // Cleanup on component unmount
    };
  }, []);

  return (
    <div className={classes.root}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <HeroCarousel />
          <FeatuerProducts />
          <Hotdeals
            productList={productList}
            handleAddcart={handleAddcart}
            isLoading={isLoading}
          />
          <DiscountCard />
        </>
      )}
    </div>
  );
});

export default Home;
