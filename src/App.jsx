import React from "react";
import "./App.css";
import { Navbar, Cart, Checkout } from "../src/component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./component/PrivateRoute";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Footer from "./component/Footer/Footer";
import SigleProduct from "./pages/SingleProduct/SingleProduct";
import Home from "./pages/Home/Home";
import ConfirmPage from "./pages/Confirmpage/ConfirmPage";
import WishList from "./pages/WishList/WishList";
import Cetagories from "./pages/Cetagories/Categories";
import ScrollToTop from "./component/ScrollTop";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/products">
            <Cetagories />
          </Route>

          <Route exact path="/product/:id">
            <SigleProduct />
          </Route>

          <Route exact path="/wishlist">
            <WishList />
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
            component={(props) => <Checkout />}
          />

          {/* Protected Route */}
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
