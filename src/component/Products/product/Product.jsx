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
import HTMLEllipsis from "react-lines-ellipsis/lib/html";

const Product = ({ product, onAddToCart }) => {
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
    <Card className={classes.root} style={{width:300, height: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={product.name}
          height="200"
          className={classes.media}
          image={product.media.source}
          title={product.name}
        />
        <CardContent>
          <div className={classes.contentHead}>
            <Typography gutterBottom variant="h6" component="h5" >
             <LinesEllipsis
                text={product.name}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </Typography>
          </div>

          <div className={classes.contentBody}>
            <Typography variant="body2" color="textSecondary" component="h3">
              <HTMLEllipsis
                unsafeHTML={product.description}
                maxLine="3"
                ellipsis="..."
                basedOn="letters"
              />
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Typography variant="body2">
          {product.price.formatted_with_symbol}
        </Typography>

        <div style={{ flexGrow: 1 }}></div> {/* Spacer */}
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
      </CardActions>
    </Card>
  );
};

export default Product;
