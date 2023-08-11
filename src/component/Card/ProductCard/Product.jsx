import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CardActionArea,
} from "@material-ui/core";
import { AddShoppingCart, Favorite, FavoriteBorder } from "@material-ui/icons";
import useStyle from "./ProductStyle";
import LinesEllipsis from "react-lines-ellipsis";
import { Link } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";


const Product = ({ product, onAddToCart }) => {
  console.log("🚀 ~ file: Product.jsx:17 ~ Product ~ product:", product);
  const classes = useStyle();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // Load wishlisted state from localStorage when component mounts
    const storedWishlisted = localStorage.getItem(product.id);
    if (storedWishlisted) {
      setIsWishlisted(true);
    }
  }, [product.id]);

  const handleWishlistClick = () => {
    // Toggle wishlisted state and update localStorage
    setIsWishlisted((prevIsWishlisted) => {
      const newWishlisted = !prevIsWishlisted;
      if (newWishlisted) {
        localStorage.setItem(product.id, "true");
      } else {
        localStorage.removeItem(product.id);
      }
      return newWishlisted;
    });
  };

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/product/${product.id}`}>
        <CardMedia
          component="img"
          alt={product.name}
          className={classes.media}
          image={product.media.source}
          title={product.name}
        />
        <CardContent className={classes.content}>
          <div className={classes.contentHead}>
            <Typography gutterBottom variant="subtitle2" component="h5">
              <LinesEllipsis
                text={product.name}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </Typography>
            <Typography
              variant="body2"
              color={`${
                product.quantity > 0 ? "textPrimary" : "textSecondary"
              }`}
              component="p"
            >
              {product.quantity > 0 ? "In Stock" : "Out of Stock"}
            </Typography>
          </div>

          <Typography
            variant="body2"
            color="textSecondary"
            component="h6"
            className={classes.contentBody}
          >
           {ReactHtmlParser(product.description)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Typography
          className={classes.title}
          variant="body2"
          style={{ paddingLeft: "10px" }}
        >{`${product.price.raw} TK`}</Typography>
        <div className={classes.cardIcon}>
          <IconButton
            aria-label="Add to wishlist"
            onClick={handleWishlistClick}
            color={isWishlisted ? "secondary" : "default"}
          >
            {isWishlisted ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <IconButton
            aria-label="Add to cart"
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default Product;
