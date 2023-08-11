import { Button, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStyles from "./SingleProductStyles";
import VariantDisplay from "../../component/VariantDisplay/VariantDisplay";
import { AddShoppingCart } from "@material-ui/icons";
import { reviews } from "../../dummyData";
import { useCommerce } from "../../context/api/CommerceProvider";
import MultiContent from "../../component/MultiContent/MultiContent";
import SimilarPorducts from "../../component/SimilarProducts/SimilarProducts";


const SingleProduct = () => {
  const classes = useStyles();
  const { id } = useParams();

  const {
    cartItems,
    getProductById,
    handleAddcart,
    handleUpdateCart,
    setLoadingCommerce,
    loadingCommerce
  } = useCommerce();

  console.log("🚀 ~ ~ setLoadingCommerce:", loadingCommerce)

  const [product, setProduct] = useState([]);
  const [cartItemId, setCardItemId] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const colorVariants = ["#FF5733", "#33FF7A", "#3374FF"];
  const textVariants = ["S", "M", "l", "Xl"];

  const [selectedColor, setSelectedColor] = useState(colorVariants[0]);
  const [selectedText, setSelectedText] = useState(textVariants[0]);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(id);
      setProduct(product);
      setLoadingCommerce(false);
    };
    if (id) fetchProduct();
    return () => {
      setProduct([]);
    };
  }, [id]);

  //get the product cartItem id & current quantity from cartItem array
  useEffect(() => {
    const inCartItem = cartItems?.line_items?.find(
      (item) => item.product_id === id
    );
    console.log(inCartItem);
    setCardItemId(inCartItem?.id);
    if (inCartItem?.quantity) {
      setQuantity(inCartItem?.quantity);
    } else {
      setQuantity(0);
    }
  }, [cartItems, id]);

  console.log(" ~ SingleProduct ~ id:", id);
  product && console.log(product);
  console.log("cartItems", cartItems);

  return (
    <Container className={classes.root}>
      <div className={classes.top}>
        <div className={classes.imageContainer}>
          <img
            src={product?.media?.source}
            alt="product"
            className={classes.image}
          />
        </div>

        <div className={classes.rightContent}>
          <div className={classes.productName}>
            <h1>{product?.name}</h1>
          </div>
          <div className={classes.productPriceQuantity}>
            <div className={classes.productPrice}>
              <h1>{`Price: ${product?.price?.raw} TK`}</h1>
            </div>
            <div className={classes.productQuantity}>
              <h1>{`In stock: ${product?.quantity}`}</h1>
            </div>
          </div>
          <div className={classes.productColorVariant}>
            <span>Colors: </span>
            <VariantDisplay
              type="color"
              values={colorVariants}
              active={selectedColor}
              onClickVariant={setSelectedColor}
            />
          </div>
          <div className={classes.productSizeVariant}>
            <span>Sizes:</span>
            <VariantDisplay
              type="text"
              values={textVariants}
              selectColor={selectedColor}
              active={selectedText}
              onClickVariant={setSelectedText}
            />
          </div>

          <div className={classes.productButton}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              disabled={product?.quantity - quantity <= 0 ? true : false}
              onClick={() => handleAddcart(product.id, 1)}
              className={classes.addButton}
              style={{
                width: "40%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className={classes.buttonText}>Add to cart</span>
              <span className={classes.buttonIcon}>
                <AddShoppingCart
                  style={{ width: "18px", height: "18px", marginLeft: "6px" }}
                />
              </span>
            </Button>
            <div className={classes.plusMinusbuttons}>
              <Button
                type="button"
                size="medium"
                variant="contained"
                disabled={quantity < 1}
                color="secondary"
                className={classes.Button}
                onClick={() => handleUpdateCart(cartItemId, quantity - 1)}
              >
                -
              </Button>
              <Typography variant="body2">{quantity}</Typography>
              <Button
                type="button"
                size="small"
                variant="contained"
                disabled={quantity >= product?.quantity || quantity < 1}
                color="primary"
                className={classes.Button}
                onClick={() => handleUpdateCart(cartItemId, quantity + 1)}
              >
                +
              </Button>
            </div>
          </div>
          <div className={classes.multiContent}>
            <MultiContent product={product} reviews={reviews} />
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        {product?.related_products && <SimilarPorducts related_products={product.related_products} handleAddcart={handleAddcart}/>}
      </div>
    </Container>
  );
};

export default SingleProduct;
