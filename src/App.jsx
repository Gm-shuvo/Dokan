import React, { useState, useEffect } from "react";
import "./App.css";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Checkout } from "../src/component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import PrivateRoute from "./component/PrivateRoute";
import { Container } from "@material-ui/core";
import SignIn from "./component/Auth/SignIn";
import SignUp from "./component/Auth/SignUp";
import Home from "./pages/Home";
import ConfirmPage from "./component/Checkout/Confirmpage/ConfirmPage";
import Footer from "./component/Footer/Footer";

const App = () => {
  const [products, setproducts] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [Order, setOrder] = useState({});
  const [Error, setError] = useState({});

  //fetching products list
  const fetchData = async () => {
    try {
      const { data } = await commerce.products.list();
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  //fetching cartitems
  const fetchCartItems = async () => {
    try {
      setcartItems(await commerce.cart.retrieve());
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(cartItems);

  const handleAddcart = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.add(productId, quantity);
      setcartItems(cart);
      toast.success("Item Added to Cart");
    } catch (error) {
      console.log(error);
      toast.error("Something worng!");
    }
  };

  const handleUpdateCart = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.update(productId, { quantity });
      setcartItems(cart);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveCart = async (productId) => {
    try {
      const { cart } = await commerce.cart.remove(productId);
      setcartItems(cart);
      toast.success("Item Removed from Cart");
    } catch (error) {
      console.log(error);
      toast.error("Something worng!");
    }
  };

  const refreshCart = async () => {
    try {
      const newCart = await commerce.cart.refresh();
      setcartItems(newCart);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmptyCart = async () => {
    try {
      const { cart } = await commerce.cart.empty();
      setcartItems(cart);
      toast.success("Cart is Empty");
    } catch (error) {
      console.log(error);
      toast.error("Something worng!");
    }
  };

  const handleCeckoutCapture = async (cardTokenId, newOrder) => {
    try {
      const inComingOrder = await commerce.checkout.capture(
        cardTokenId,
        newOrder
      );
      setOrder(inComingOrder);
      refreshCart();
    } catch (error) {
      setError(error.data.error.message);
    }
  };
  //console.log(cartItems);

  useEffect(() => {
    fetchData();
    fetchCartItems();
    //handleAddcart()
  }, []);

  return (
    <>
      <Router>
        <Navbar cartItems={cartItems} />
        <Switch>
          <Route exact path="/">
            <Home productList={products} onAddToCart={handleAddcart} />
          </Route>

          <Route exact path="/cart">
            <Cart
              cartItems={cartItems}
              handleUpdateCart={handleUpdateCart}
              handleRemoveCart={handleRemoveCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>

          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          {/* Protected Route */}
          <PrivateRoute
            exact
            path="/checkout"
            component={(props) => (
              <Checkout
                cartItems={cartItems}
                Order={Order}
                OnCatureOrder={handleCeckoutCapture}
                Error={Error}
                refreshCart={refreshCart}
              />
            )}
          />
          <PrivateRoute
            exact
            path="/confirm"
            component={(props) => <ConfirmPage />}
          />
        </Switch>
        <Footer />
      </Router>
      <Toaster />
    </>
  );
};

export default App;
