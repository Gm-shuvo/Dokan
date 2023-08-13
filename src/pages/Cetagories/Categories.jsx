import React, { useEffect } from "react";
import { useStyles } from "./CategoriesStyles";
import { useCommerce } from "../../context/api/CommerceProvider";
import CategoriesList from "../../component/Categories/CategoriesList";
import Product from "../../component/Card/ProductCard/Product";
import { Grid } from "@material-ui/core";
import { useScrollToTop } from "../../hooks/useScrollTop";
import { useGlobalLoader } from "../../context/loader/GlobalLoader";
import Loader from "../../component/Loader/Loader";
const Catagories = () => {
  const [categories, setCatagories] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [slug, setSlug] = React.useState("");
  const classes = useStyles();

  

  const { getProducCategory, handleAddcart, fetchData } = useCommerce();
  const { isLoading, showLoader, hideLoader } = useGlobalLoader();
  
  

  useEffect(() => {
    const fetchCatagories = async () => {
      try {
        const categories = await getProducCategory();
        setCatagories(categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCatagories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        showLoader();
        const { data } = await fetchData();
        setProducts(data);
        hideLoader();
      } catch (error) {
        console.log(error);
        hideLoader();
      }
    };
    fetchProducts();
  }, []);

  const handleCategories = (slug) => {
    const fetchCategories = async () => {
      try {
        
        const { data } = await fetchData({ category_slug: slug });
        setSlug(slug);
        setProducts(data);
        
      } catch (error) {
        console.log(error);
        
      }
    };
    fetchCategories();
  };

  console.log("🚀 ~ file:  ~ catagories", categories);
  console.log("🚀 ~ file:  ~ slug", slug);
  console.log("🚀 ~ file:  ~ products", products);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.root}>
          <div className={classes.content}>
            <div className={classes.left}>
              <CategoriesList
                categories={categories}
                handleCategories={handleCategories}
              />
            </div>
            {products.length > 0 ? (
              <div className={classes.right}>
                <Grid container spacing={2}>
                  {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <Product
                        product={product}
                        onAddToCart={handleAddcart}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            ) : (
              <div className={classes.right}>
                <h1>No Products Found</h1>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Catagories;
