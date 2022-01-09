import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";
import { FaShoppingBasket } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.innerSection}>
            <NavLink to="/" className={classes.logo}>
              <FaShoppingBasket size={50} color="white" />
            </NavLink>
          </div>
          <div className={classes.innerSection}>
            <h1 className={classes.webTitle}>LetsShop</h1>
          </div>
          <div className={classes.innerSection}></div>
        </div>
        <div className={classes.section}>
          <div className={classes.innerSection}></div>
          <div className={classes.innerSection}></div>
          <div className={classes.innerSection}></div>
        </div>
      </div>
      <div className={classes.containerTwo}>
        <p>
          <span>©</span>
          LetsShop. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
