import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import CartItem from "../../component/CartItem/CartItem";
import useStyles from "./CartItemsStyle";
import { Link } from "react-router-dom";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
const CartItems = ({
  cartItems,
  handleUpdateCart,
  handleRemoveCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();
  // const isEmpty =  cartItems.line_items.lenght

  const IsEmptyCart = () => {
    return (
      <Container>
        <div className={classes.emptyCart}>
          <img className={classes.emptyCartImg} src="https://i.ibb.co/k9yW91g/emptycart.png" alt="empty-cart" />
          <Typography className={classes.emptyCartText} variant="subtitle1">Cart is Empty.Please Shop!</Typography>
          <Button
            component={Link}
            to="/"
            variant="outlined"
            color="primary"
            className={classes.emptyCartButton}
          >
            Shop Now
          </Button>
        </div>
      </Container>
    );
  };

  const Filledcart = () => {
    return (
      <Grid container className={classes.container}>
        {cartItems.line_items.map((cartItem, index) => (
          <Grid item key={index} style={{ padding: "0px" }}>
            <CartItem
              cartItem={cartItem}
              handleUpdateCart={handleUpdateCart}
              handleRemoveCart={handleRemoveCart}
            />
          </Grid>
        ))}
        <div className={classes.cardDetails} style={{}}>
          <Typography variant="subtitle2">
            Subtotal: {cartItems.subtotal?.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              size="medium"
              color="secondary"
              variant="outlined"
              className={classes.emptyButton}
              onClick={() => handleEmptyCart()}
            >
              EmptyCard
            </Button>
            <Button
              size="medium"
              color="primary"
              variant="contained"
              style={{ textAlign: "center" }}
              className={classes.checkoutButton}
              component={Link}
              to="/checkout"
            >
              Checkout
            </Button>
          </div>
        </div>
      </Grid>
    );
  };

  // console.log(cartItems);
  return (
    <>
      <Container className={classes.root} style={{ marginBottom: "80px" }}>
        <div className={classes.title}>
          <Typography
            variant="h6"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <ShoppingBasketOutlinedIcon style={{ fontSize: 30 }} />
            Your Shopping Cart{" "}
          </Typography>
          <span
            className={classes.items}
            style={{ marginLeft: "4px", font: "bold" }}
          >
            {cartItems.total_items}
          </span>
        </div>
        <div className={classes.devider}></div>
        {!cartItems.total_items ? <IsEmptyCart /> : <Filledcart />}
      </Container>
    </>
  );
};

export default CartItems;
