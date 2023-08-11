// src/context/CommerceContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import { toast } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";

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
  const [loadingCommerce, setLoadingCommerce] = useState(false);

  // Fetching data...

  

  const getProductById = async (productId) => {
    try {
      
      const product = await commerce.products.retrieve(productId);
      setSingleProduct(product);
      setLoadingCommerce(false);
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
    const fetchData = async () => {
      try {
        setLoadingCommerce(true);
        const { data } = await commerce.products.list();
        setProducts(data);
        setLoadingCommerce(false);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCartItems = async () => {
      try {
        setLoadingCommerce(true);
        setCartItems(await commerce.cart.retrieve());
        setLoadingCommerce(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    fetchCartItems();
  }, []);

  const commerceContextValue = {
    products,
    cartItems,
    loadingCommerce,
    setLoadingCommerce,
    order,
    error,
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
      {loadingCommerce ? (
        <TailSpin
          height="60"
          width="60"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        children
      )}
    </CommerceContext.Provider>
  );
};
