import React from "react";
import useStyles from "./DiscountCardStyles";

const DiscountCard = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.cardContent}>
        <div className={classes.cardContentLeft}>
          <lord-icon
            target="section"
            src="https://cdn.lordicon.com/qzwudxpy.json"
            trigger="hover"
            colors="outline:#121331,primary:#ebe6ef,secondary:#d1fad7,tertiary:#f4a09c"
            style={{ width: "300px", height: "300px" }}
          ></lord-icon>
        </div>
        <div className={classes.cardContentRight}>
          <div className={classes.cardContentRightTop}>
            <h3>
              Get <span>30%</span> Off
              <br />
              Discount Coupon
            </h3>

            <p>by subcribe out Newsletter</p>
          </div>
          <div className={classes.cardContentRightBottom}>
            <form>
              <input type="text" placeholder="Enter your email" />
              <button type="submit">
                Get Coupon
                <span>
                  <lord-icon
                    target="button"
                    src="https://cdn.lordicon.com/zmkotitn.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ width: "20px", height: "20px", paddingTop: "2px" }}
                  ></lord-icon>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountCard;
