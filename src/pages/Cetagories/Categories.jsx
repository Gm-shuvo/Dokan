import React, { useEffect } from "react";
import { useStyles } from "./CategoriesStyles";
import { useCommerce } from "../../context/api/CommerceProvider";
import CategoriesList from "../../component/Categories/CategoriesList";

const Catagories = () => {
  const [categories, setCatagories] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [slug, setSlug] = React.useState("");
  const classes = useStyles();

  const { getProducCategory, getProducCategoryById, fetchData } = useCommerce();

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
        const products = await fetchData();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  
  const handleCategories = (slug) => {
    const fetchCategories = async () => {
      try {
        const categories = await fetchData({ category_slug: slug});
        setSlug(slug);
        setProducts(categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }
  
  console.log("🚀 ~ file:  ~ catagories", categories)
  console.log("🚀 ~ file:  ~ slug", slug)
  console.log("🚀 ~ file:  ~ products", products)

  return (
    <section className={classes.root}>
      <div className={classes.content}>
        <div className={classes.left}>
          <CategoriesList categories={categories} handleCategories={handleCategories}/>
        </div>
        <div className={classes.right}>
          <h2>right</h2>
        </div>
      </div>
    </section>
  );
};

export default Catagories;
