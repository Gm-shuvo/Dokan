import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import CartItem from "./CartItem/CartItem";
import useStyles from "./CartItemsStyle";
import { Link } from "react-router-dom";
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
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
      <Typography variant="subtitle1">Cart is Empty.Please Shop!</Typography>
    );
  };

  const Filledcart = () => {
    return (
      <Grid container  className={classes.container}>
        {cartItems.line_items.map((cartItem, index) => (
          <Grid item key={index} style={{padding:"0px"}}>
            <CartItem
              cartItem={cartItem}
              handleUpdateCart={handleUpdateCart}
              handleRemoveCart={handleRemoveCart}
            />
          </Grid>
        ))}
        <div className={classes.cardDetails} style={{display:"flex", alignItems:"center", justifyContent: "space-between", marginTop:"20px", padding:"12px"}}>
          <Typography variant="subtitle2">
            Subtotal: {cartItems.subtotal?.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              size="large"
              color="secondary"
              variant="outlined"
              className={classes.emptyButton}
              onClick={() => handleEmptyCart()}
            >
              EmptyCard
            </Button>
            <Button
              size="large"
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
      <Container className={classes.root} style={{marginBottom:"80px"}}>
        <div className={classes.title} >
          <Typography variant="h6" style={{display:"flex", alignItems: "center" , gap: "8px"}}>
            <ShoppingBasketOutlinedIcon style={{fontSize: 30 }} />
            Your Shopping Cart{" "}
          </Typography>
          <span className={classes.items} style={{marginLeft: "4px", font: "bold" }}>{cartItems.total_items}</span>
        </div>
        <div className={classes.devider}></div>
        {!cartItems.total_items ? <IsEmptyCart /> : <Filledcart />}
      </Container>
    </>
  );
};

export default CartItems;
