import React from 'react';
import {AppBar,Badge,IconButton,Toolbar,Typography} from '@material-ui/core';
import useStyles from './NavigationStyle'
import { Link } from "react-router-dom";
import { ShoppingCart } from '@material-ui/icons';

const Navigation =({cartItems}) =>{
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" classes={classes.appBar} color ='inherit'>
        <Toolbar >
          <Typography component={Link}  to='/' variant = 'h6' classes={classes.title} style={{textDecoration:'none'}}>
            ShopApp
          </Typography>
          <div className={classes.grow}/>
          <div className = {classes.button}>
            <IconButton aria-label='show cart item ' color ='inherit' component={Link} to='/cart'>
              <Badge badgeContent={cartItems.total_items} color='secondary'>
                <ShoppingCart/>
              </Badge>
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation
