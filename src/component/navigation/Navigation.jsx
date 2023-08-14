import React, { useEffect, useState } from "react";
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
  Filter9PlusRounded,
} from "@material-ui/icons";
import { useAuth } from "../../context/auth/AuthProvider";
import { useCommerce } from "../../context/api/CommerceProvider";

const Navigation = () => {
  const classes = useStyles();
  const history = useHistory();

  const { currentUser, logout, loadingAuth, setLoadingAuth } = useAuth();
  const { cartItems } = useCommerce();

  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  //get the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //set the current window width to the state
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowWidth);

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

        <div className={classes.navRight}>
          <div className={classes.navLinks}>
            <Button className={classes.navLink} component={Link} to="/products">
              Products
            </Button>
            <Button className={classes.navLink} component={Link} to="/wishlist">
              Wishlist
            </Button>
          </div>
          <div className={classes.navButons}>
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
              <div className={classes.authButton}>
                <IconButton
                  aria-describedby={popoverId}
                  onClick={handleAvatarClick}
                  color="inherit"
                  className={classes.avatarButton}
                >
                  <Avatar>{currentUser?.displayName?.charAt(0)}</Avatar>
                </IconButton>
                <Popover
                  className={classes.popover}
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
                  <List className={classes.listPopOver}>
                    <ListItem
                      button
                      onClick={handlePopoverClose}
                      className={classes.listItemPopOver}
                    >
                      <ListItemIcon>
                        <AccountCircle />
                      </ListItemIcon>
                      <ListItemText primary={currentUser?.displayName} />
                    </ListItem>
                    {windowWidth <= 960 ? (
                      <>
                        <ListItem
                          button
                          onClick={() => {
                            history.push("/products");
                            handlePopoverClose();
                          }}
                          className={classes.listItemPopOver}
                        >
                          <ListItemIcon>
                            <Filter9PlusRounded />
                          </ListItemIcon>
                          <ListItemText primary="Products" />
                        </ListItem>
                        <ListItem
                          button
                          onClick={() => {
                            history.push("/wishlist");
                            handlePopoverClose();
                          }}
                          className={classes.listItemPopOver}
                        >
                          <ListItemIcon>
                            <Favorite />
                          </ListItemIcon>
                          <ListItemText primary="Wishlist" />
                        </ListItem>
                      </>
                    ) : null}
                    <ListItem
                      button
                      onClick={handleLogout}
                      className={classes.listItemPopOver}
                    >
                      <ListItemIcon>
                        <ExitToApp />
                      </ListItemIcon>
                      <ListItemText primary="Logout" />
                    </ListItem>
                  </List>
                </Popover>
              </div>
            ) : (
              <>
                {!loadingAuth ? (
                  <>
                    <Button
                      className={classes.loginButton}
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        history.push("/signin");
                      }}
                    >
                      Login
                    </Button>

                    <Button
                      className={classes.loginButton}
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        history.push("/signup");
                      }}
                    >
                      Signup
                    </Button>
                  </>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </AppBar>
  );
};

export default Navigation;
