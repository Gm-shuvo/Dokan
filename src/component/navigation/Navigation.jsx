import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import useStyles from "./NavigationStyle";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import { useAuth } from "../../context/auth/AuthProvider";

const Navigation = ({ cartItems }) => {
  const classes = useStyles();

  const {currentUser, logout}  = useAuth();

  console.log(currentUser );

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const handleLogout = () => {
    handleMenuClose();
    logout();
  }



  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
          style={{ textDecoration: "none" }}
        >
          E-bag
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton
            aria-label="show cart items"
            color="inherit"
            component={Link}
            to="/cart"
          >
            <Badge
              badgeContent={cartItems.total_items}
              color="secondary"
              overlap="rectangular"
            >
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>

        {currentUser ? (
          <>
          <IconButton
                aria-controls="user-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
              >
                <Avatar>{currentUser?.displayName?.charAt(0)}</Avatar>
              </IconButton>
              <Menu
                id="user-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  {currentUser?.displayName}
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
          </>
        ):(
          <>
            <div className={classes.button}>
              <Button component={Link} to="/signin" color="inherit">
                Login
              </Button>
            </div>
            <div className={classes.button}>
              <Button component={Link} to="/signup" color="inherit">
                Signup
              </Button>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
