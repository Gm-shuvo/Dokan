import React from "react";
import { Link } from "react-router-dom";
import { Typography, Divider, IconButton } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  Twitter,
  PhoneOutlined,
  MailOutlineOutlined,
} from "@material-ui/icons";

import useStyles from "./FooterStyles"; // Create a styles file for Footer

const Footer = () => {
  const classes = useStyles();

  const navItems = [
    { name: "Products", path: "/products" },
    { name: "Store Location", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/signin" },
    { name: "Register", path: "/signup" },
  ];

  const navItems2 = [
    { name: "Privacy Policy", path: "/" },
    { name: "Jobs", path: "/" },
    { name: "Terms and Conditions", path: "/" },
  ];

  return (
    <footer className={classes.footer}>
      <section className={classes.section}>
        <div className={classes.brandName}>
          <img
            src="https://i.ibb.co/qCphQ0H/Dokan-8-8-2023.png"
            alt="logo"
            height="35px"
          />
          <Typography variant="h6" className={classes.brandTitle}>
            A Fashion Brand
          </Typography>
        </div>
        <div className={classes.menubar}>
          <Typography variant="h6" className={classes.navTitle}>
            Menubar
          </Typography>
          <ul className={classes.navList}>
            {navItems.map((item, index) => (
              <li key={index} className={classes.navItem}>
                <Link to={item.path} className={classes.navLink}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.useFulLink}>
          <Typography variant="h6" className={classes.navTitle}>
            Useful Links
          </Typography>
          <ul className={classes.navList}>
            {navItems2.map((item, index) => (
              <li key={index} className={classes.navItem}>
                <Link to={item.path} className={classes.navLink}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.reachOut}>
          <Typography variant="h6" className={classes.navTitle}>
            Reach Out to us
          </Typography>
          <div className={classes.contactInfo}>
            <MailOutlineOutlined /> <span>gm.shuvo.ru.cse@gmail.com</span>
          </div>
          <div className={classes.contactInfo}>
            <PhoneOutlined /> <span>+99012345</span>
          </div>
        </div>
      </section>
      <Divider />
      <section className={classes.bottomSection}>
        <Typography variant="body1" className={classes.copyRight}>
          All rights reserved to DOKAN &copy; {new Date().getFullYear()}
        </Typography>
        <div className={classes.socialIcons}>
          <IconButton
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook className={classes.socialIcon} />
          </IconButton>
          <IconButton
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className={classes.socialIcon} />
          </IconButton>
          <IconButton
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className={classes.socialIcon} />
          </IconButton>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
