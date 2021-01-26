import React from 'react';
import {AppBar,Badge,IconButton,Toolbar,Typography} from '@material-ui/core';
import useStyles from './NavigationStyle'
import { Link } from "react-router-dom";
import { ShoppingCart } from '@material-ui/icons';

const Navigation =() =>{
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" classes={classes.appBar} color ='inherit'>
        <Toolbar >
          <Typography variant = 'h6' classes={classes.title}>
            ShopApp
          </Typography>
          <div className={classes.grow}/>
          <div className = {classes.button}>
            <IconButton aria-label='show cart item ' color ='inherit' component={Link} to='/cart'>
              <Badge badgeContent={4} color='secondary'>
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
