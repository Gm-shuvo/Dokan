import React from 'react';
import { Link } from 'react-router-dom';
import {useStyles} from './WishListStyles';

const WishList = () => {
  //get the wishlist from local storage
  //map through the wishlist and display the products
  //if the wishlist is empty display a message

  const wishList = JSON.parse(localStorage.getItem('wishList'));
  console.log("🚀 ~ file: WishList.jsx:11 ~ WishList ~ wishList:", wishList)
  

  const classes = useStyles();
  return (
    <div className={classes.root}>
     <h1 className={classes.Heading}>wish Lists</h1>
      <div className={classes.WishList}>
        <div className={classes.WishListProduct}>
          <div className={classes.WishListProductImg}>
            <img src="" alt="" />
          </div>
          <div className={classes.WishListProductInfo}>
            <h3>Product Name</h3>
            <p>Price</p>
            <p>Rating</p>
            <button className={classes.WishListProductBtn}>Add to cart</button>
          </div>
        </div>
    </div>
    </div>
  );
}

export default WishList;