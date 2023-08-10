import { Button, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStyles from "./SingleProductStyles";
import VariantDisplay from "../../component/VariantDisplay/VariantDisplay";
import { AddShoppingCart } from "@material-ui/icons";

import { useCommerce } from "../../context/api/CommerceProvider";


const SingleProduct = () => {
  
  const classes = useStyles();
  const { id } = useParams();

  const { cartItems, getProductById, handleAddcart, handleUpdateCart  } = useCommerce();

  const [product, setProduct] = useState([]);
  const [cartItemId, setCardItemId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  

  const colorVariants = ["#FF5733", "#33FF7A", "#3374FF"];
  const textVariants = ["S", "M", "l", "Xl"];

  const [selectedColor, setSelectedColor] = useState(colorVariants[0]);
  const [selectedText, setSelectedText] = useState(textVariants[0]);
  
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(id);
      setProduct(product);
    };
    if (id) fetchProduct();
  }, [id]);

  //get the product cartItem id & current quantity from cartItem array
  useEffect(() => {
    const inCartItem = cartItems?.line_items?.find((item) => item.product_id === id);
    console.log(inCartItem);
    setCardItemId(inCartItem?.id);
    setQuantity(inCartItem?.quantity);
    
  }, [cartItems, id]);
    
  
  console.log(" ~ SingleProduct ~ id:", id);
  product && console.log(product);
  console.log("cartItems", cartItems);

  return (
    <Container className={classes.root}>
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
          <span>Color: </span>
          <VariantDisplay
            type="color"
            values={colorVariants}
            active={selectedColor}
            onClickVariant={setSelectedColor}
          />
        </div>
        <div className={classes.productSizeVariant}>
          <span>Size:</span>
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
            onClick={() => handleAddcart(product.id, 1)}
            className={classes.addButton}
          >
            <span>Add to cart</span>
            <span className={classes.buttonIcon}>
              <AddShoppingCart style={{ width: "18px", height: "18px" , marginLeft: "6px"}} />
            </span>
          </Button>
          <div className={classes.plusMinusbuttons}>
            <Button
              type="button"
              size="large"
              color="secondary"
              className={classes.Button}
              onClick={() =>
                handleUpdateCart(cartItemId, quantity - 1)
              }
            >
              -
            </Button>
            <Typography variant="body2">{quantity}</Typography>
            <Button
              type="button"
              size="large"
              color="primary"
              className={classes.Button}
              onClick={() =>
                handleUpdateCart(cartItemId, quantity + 1)
              }
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProduct;
