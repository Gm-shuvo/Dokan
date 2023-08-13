import React, { useEffect } from "react";
import { useStyles } from "./CategoriesStyles";
import { useCommerce } from "../../context/api/CommerceProvider";
import CategoriesList from "../../component/Categories/CategoriesList";
import Product from "../../component/Card/ProductCard/Product";
import { Grid } from "@material-ui/core";
const Catagories = () => {
  const [categories, setCatagories] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [slug, setSlug] = React.useState("");
  const classes = useStyles();

  const { getProducCategory, handleAddcart, fetchData } = useCommerce();

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
        const { data } = await fetchData();
        setProducts(data);
      } catch (error) {
        console.log(error);
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
    <section className={classes.root}>
      <div className={classes.content}>
        <div className={classes.left}>
          <CategoriesList
            categories={categories}
            handleCategories={handleCategories}
          />
        </div>
        <div className={classes.right}>
          <h2 className={classes.title}>Products</h2>
          <Grid container spacing={3}>
            {products?.map((product, index) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                <Product product={product} onAddToCart={handleAddcart} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Catagories;
