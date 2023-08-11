import React, { useState } from "react";
import useStyles from "./MultiContentStyles";
import CustomerReview from "../Card/CustomerReview/CustomerReview";
import ReactHtmlParser from 'react-html-parser';


const reviews = [
  {
    id: 1,
    name: "Jon Devid",
    email: "jon@gmail.com",
    image: "https://i.ibb.co/1J0h9pL/Rectangle-1.png",
    reviews: "This product is very good.",
  },
  {
    id: 2,
    name: "Alice Smith",
    email: "alice@example.com",
    image: "https://i.ibb.co/7JGMsXj/Rectangle-2.png",
    reviews: "I love this product! It exceeded my expectations.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@gmail.com",
    image: "https://i.ibb.co/ncw6P9r/Rectangle-3.png",
    reviews: "Highly recommended. Great quality and fast shipping.",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily@example.com",
    image: "https://i.ibb.co/Qb3qfDM/Rectangle-4.png",
    reviews: "I'm really happy with my purchase. Will buy again!",
  },
  {
    id: 5,
    name: "David Miller",
    email: "david@gmail.com",
    image: "https://i.ibb.co/h1XhHwM/Rectangle-5.png",
    reviews: "This is exactly what I needed. Perfect!",
  },
];
const MultiContent = ({ product }) => {
  const classes = useStyles();
  const [isDescription, setIsDescription] = useState(true);

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div
          className={`${classes.title} ${isDescription ? classes.active : ""}`}
          onClick={() => setIsDescription(true)}
        >
          Description
        </div>
        <div
          className={`${classes.title} ${!isDescription ? classes.active : ""}`}
          onClick={() => setIsDescription(false)}
        >
          Reviews
        </div>
      </div>
      <div className={classes.contentContainer}>
        {isDescription ? (
          <div className={classes.content}>
            <div className={classes.contentText}>{ReactHtmlParser(product?.description)}</div>
          </div>
        ) : (
          <div className={classes.content}>
            <div className={classes.contentReview}>
              {reviews?.map((review) => (
                <div className={classes.review} key={review.id}>
                  <CustomerReview review={review} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiContent;
