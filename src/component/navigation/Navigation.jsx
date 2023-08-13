import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
} from "@material-ui/core";
import useStyles from "./NavigationStyle";
import { useHistory, Link } from "react-router-dom";

import {
  ShoppingCart,
  AccountCircle,
  ExitToApp,
  Favorite,
} from "@material-ui/icons";
import { useAuth } from "../../context/auth/AuthProvider";
import { useCommerce } from "../../context/api/CommerceProvider";

const Navigation = () => {
  const classes = useStyles();
  const history = useHistory();

  const { currentUser, logout, setIsAuthenticated } = useAuth();
  const { cartItems } = useCommerce();

  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAvatarClick = (event) => {
    setPopoverOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handlePopoverClose();
    logout();
    setIsAuthenticated(false);
    history.push("/");
  };

  const popoverId = popoverOpen ? "avatar-popover" : undefined;

  

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <div className={classes.wrapper}>
        <Link
          className={classes.logo}
          to={"/"}
          style={{ textDecoration: "none" }}
        >
          <img
            src="https://i.ibb.co/qCphQ0H/Dokan-8-8-2023.png"
            alt="logo"
            height="35px"
          />
        </Link>

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

          {currentUser ? (
            <>
              <IconButton
                aria-describedby={popoverId}
                onClick={handleAvatarClick}
                color="inherit"
              >
                <Avatar>{currentUser?.displayName?.charAt(0)}</Avatar>
              </IconButton>
              <Popover className={classes.popover}
                id={popoverId}
                open={popoverOpen}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <List>
                  <ListItem button onClick={handlePopoverClose}>
                    <ListItemIcon>
                      <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary={currentUser?.displayName} />
                  </ListItem>
                  <ListItem button onClick={() => {history.push("/wishlist");handlePopoverClose()}}>
                    <ListItemIcon>
                      <Favorite />
                    </ListItemIcon>
                    <ListItemText primary="Wishlist" />
                  </ListItem>
                  <ListItem button onClick={handleLogout}>
                    <ListItemIcon>
                      <ExitToApp />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItem>
                </List>
              </Popover>
            </>
          ) : (
            <div className={classes.auth}>
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
            </div>
          )}
        </div>
      </div>
    </AppBar>
  );
};

export default Navigation;
