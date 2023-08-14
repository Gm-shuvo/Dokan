// src/context/CommerceContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import { toast } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import Loader from "../../component/Loader/Loader";

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
  // const [loadingCommerce, setLoadingCommerce] = useState(true);

  // console.log("🚀 ~ ~ loadingCommerce:", loadingCommerce);

  // Fetching data...
  const fetchData = async (filters = {}) => {
    return await commerce.products.list(filters);
  };

  // const fetchProducts = async () => {
  //   try {
  //     setLoadingCommerce(true);
  //     const { data } = await fetchData();
  //     setProducts(data);
  //     setLoadingCommerce(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoadingCommerce(false);
  //   }
  // }

  const fetchCartItems = async () => {
    try {
      setCartItems(await commerce.cart.retrieve());
    } catch (error) {
      console.log(error);
    } 
  };

  const getProductById = async (productId) => {
    return await commerce.products.retrieve(productId);
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
  const getProducCategory = async () => {
    try {
      const { data } = await commerce.categories.list();
      return data;
    } catch (error) {
      console.log(error);
    }
  }


  const getProducCategoryById = async (category) => {
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

  // wishlist fuctionality
  const getWishlistFromLocalStorage = () => {
    const wishlist = localStorage.getItem("wishlist");
    return wishlist ? JSON.parse(wishlist) : [];
  };

  // Helper function to update the wishlist in local storage
  const updateWishlistInLocalStorage = (wishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };
  const addToWishlist = (product) => {
    const wishlist = getWishlistFromLocalStorage();
    if (!wishlist.find((wish) => wish.id === product.id)) {
      wishlist.push(product);
      updateWishlistInLocalStorage(wishlist);
    }
  };

  const removeFromWishlist = (productId) => {
    const wishlist = getWishlistFromLocalStorage();
    const updatedWishlist = wishlist.filter((wish) => wish.id !== productId);
    updateWishlistInLocalStorage(updatedWishlist);
  };

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      fetchCartItems();
    }
    return () => (isSubscribed = false);
  }, []);

  const commerceContextValue = {
    products,
    cartItems,
    
    fetchData,
    
    order,
    error,
    getProductById,
    // Other functions...
    handleAddcart,
    handleRemoveCart,
    handleUpdateCart,
    refreshCart,
    handleEmptyCart,
    getProducCategory,
    getProducCategoryById,
    handleCeckoutCapture,
    // wishlist fuctionality
    getWishlistFromLocalStorage,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <CommerceContext.Provider value={commerceContextValue}>
      { children}
    </CommerceContext.Provider>
  );
};
