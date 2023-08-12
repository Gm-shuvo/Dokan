import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
} from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import React from "react";
import useStyles from "./CartItemStyle";
import { Link } from "react-router-dom";


const CartItem = ({ cartItem, handleUpdateCart, handleRemoveCart }) => {
  console.log(cartItem);

  const classes = useStyles();
  return (
    <Card className={classes.root} style={{textDecoration: "none"}}>
      <CardContent className={classes.cardContent}>
        <CardMedia
          className={classes.media}
          image={cartItem.media.source}
          title={cartItem.name}
        />
        <div className={classes.title}>
          <Typography variant="subtitle2">{cartItem.name}</Typography>
          <Typography
            variant="body2"
            style={{ color: "gray", display: "flex", gap: "6px"}}
          >
            <span>{`Quantity: ${cartItem.quantity}`}</span>
            <span>{`Each: ${cartItem.price.raw} tk`}</span>
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="large"
            color="secondary"
            className={classes.Button}
            onClick={(e) => {e.stopPropagation();handleUpdateCart(cartItem?.id, cartItem.quantity - 1)}}
          >
            -
          </Button>
          <Typography variant="body2">{cartItem.quantity}</Typography>
          <Button
            type="button"
            size="large"
            color="primary"
            className={classes.Button}
            onClick={(e) => {e.stopPropagation(); handleUpdateCart(cartItem?.id, cartItem.quantity + 1)}}
          >
            +
          </Button>
        </div>
        <div
          className={classes.removeButton}
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconButton
            aria-label="Remove from cart"
            color="secondary"
            onClick={(e) => {e.stopPropagation(); handleRemoveCart(cartItem.id)}}
          >
            <DeleteForever />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
