// src/context/CommerceContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import { toast } from "react-hot-toast";

const CommerceContext = createContext();

export const useCommerce = () => {
  return useContext(CommerceContext);
};

export const CommerceProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const [order, setOrder] = useState({});
  const [error, setError] = useState(null);

  // Fetching data...

  const fetchData = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCartItems = async () => {
    try {
      setCartItems(await commerce.cart.retrieve());
      console.log(cartItems);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (productId) => {
    try {
      const product = await commerce.products.retrieve(productId);
      
      return product;
    } catch (error) {
      console.log(error);
    }
  };


  // Other functions...
  const handleAddcart = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.add(productId, quantity);
      setCartItems(cart);
      toast.success("Item Added to Cart");
    } catch (error) {
      console.log(error);
      toast.error("Something worng!");
    }
  };

  const handleRemoveCart = async (productId) => {
    try {
      const { cart } = await commerce.cart.remove(productId);
      setCartItems(cart);
      toast.success("Item Removed from Cart");
    } catch (error) {
      console.log(error);
      toast.error("Something worng!");
    }
  };

  const handleUpdateCart = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.update(productId, { quantity });
      setCartItems(cart);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshCart = async () => {
    try {
      const newCart = await commerce.cart.refresh();
      setCartItems(newCart);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmptyCart = async () => {
    try {
      const { cart } = await commerce.cart.empty();
      setCartItems(cart);
      toast.success("Cart is Empty");
    } catch (error) {
      console.log(error);
      toast.error("Something worng!");
    }
  };

  //get product by category
  const getProductByCategory = async (category) => {
    try {
      const { data } = await commerce.products.list({
        category_slug: [category],
      });
      return data;
    } catch (error) {
      console.log(error);
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

  useEffect(() => {
    fetchData();
    fetchCartItems();
  }, []);

  const commerceContextValue = {
    products,
    cartItems,
    singleProduct,
    order,
    error,
    fetchData,
    fetchCartItems,
    getProductById,
    // Other functions...
    handleAddcart,
    handleRemoveCart,
    handleUpdateCart,
    refreshCart,
    handleEmptyCart,
    getProductByCategory,
    handleCeckoutCapture,

  };

  return (
    <CommerceContext.Provider value={commerceContextValue}>
      {children}
    </CommerceContext.Provider>
  );
};
