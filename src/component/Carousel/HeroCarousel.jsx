import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import useStyles from './HeroCarouselStyle';


const HeroCarousel = () => {
  const classes = useStyles();
  const [slideNumber, setSlideNumber] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (slideNumber === 4) {
        setSlideNumber(1);
      } else {
        setSlideNumber(slideNumber + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [slideNumber]);

  const content = [
    {
      title: 'Elegant Styles',
      description: 'We are offering the Fashion That Fits You Best. Grab Now!',
      image:
        'https://www.seekpng.com/png/full/858-8584137_fashion-forward-episodes-offers-fashion.png',
    },
    {
      title: 'Comfort Fasion',
      description: 'Elevate Your Style with our brand new products, Purchase Today!',
      image: 'https://images.pngnice.com/download/2113/Excited-Girl-Holding-Shopping-Bag-Transparent-PNG.png',
    },
    {
      title: 'Royal Vibe',
      description: 'You one stop place to Shop with Confidence. Shopping is Easy!',
      image: 'https://aaatap.com/merchant/assets/img/shopping_model.png',
    },
    {
      title: 'Stylish Look',
      description: 'Remarks the landmark of Always On Trend courtesy, Hurry Up!',
      image: 'https://www.pngall.com/wp-content/uploads/5/Attractive-Model-Man-PNG-Picture.png',
    },
  ];

  return (
    <div className={classes.slider}>
      {content.map((item, index) => (
        <div
          key={index}
          className={`${classes.slide} ${slideNumber === index + 1 && 'active'}`}
        >
          <div
            className={classes.image}
            style={{
              backgroundColor:
                (slideNumber === 1 && '#B1D7B4') ||
                (slideNumber === 2 && '#A8D1D1') ||
                (slideNumber === 3 && '#FECD70') ||
                (slideNumber === 4 && '#D6E4E5'),
            }}
          >
            <img src={item.image} alt="" className='relative z-10' />
          </div>
          <div className={classes.info}>
            <Typography variant='h4' component={'h4'} className={classes.title}>
              {item.title}
            </Typography>
            <Typography variant='body2' component={'p'} className={classes.description}>
              {item.description}
            </Typography>
            <Link to='#'>
              <Button variant="contained" color="primary">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      ))}
      <div className={classes.navigation}>
        {[1, 2, 3, 4].map((navIndex) => (
          <div
            key={navIndex}
            className={`${classes.navBtn} ${
              slideNumber === navIndex && 'active'
            }`}
            onClick={() => setSlideNumber(navIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
