import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./WishListStyles";
import { useCommerce } from "../../context/api/CommerceProvider";
import WishListCard from "../../component/Card/WishListCard/WishListCard";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { getWishlistFromLocalStorage, removeFromWishlist } =
    useCommerce();

  const EmptyWishList = () => {
    return (
      <div className={classes.EmptyWishList}>
        <h1>WishList is Empty</h1>
        <Link to="/products" className={classes.ShopNow}>
          Shop Now
        </Link>
      </div>
    );
  }

  const removeWishlist = (id) => {
    removeFromWishlist(id);
    const wishes = getWishlistFromLocalStorage();
    setWishlist(wishes);
  }
  //get the wishlist from local storage
  //map through the wishlist and display the products
  //if the wishlist is empty display a message
  //if the wishlist is not empty display the products
  

  useEffect(() => {
    setIsLoading(true);
    const wishes = getWishlistFromLocalStorage();
    console.log("🚀 ~ file: WishList.jsx:19 ~ useEffect ~ wishes:", wishes);
    setWishlist(wishes);
    setIsLoading(false);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.Heading}>wish Lists</h1>
      <div className={classes.WishList}>
        {wishlist.length === 0 ? (
          <EmptyWishList/> ):
        (
          <div className={classes.Wish}>
            {wishlist.map((wish) => (
            <WishListCard
              key={wish.id}
              wish={wish}
              removeFromWishlist={removeWishlist}
            />
          ))}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default WishList;
