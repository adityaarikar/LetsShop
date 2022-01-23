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
            <h1 className={classes.webTitle}>LetsShop</h1>
            <p>Make your shopping easier and more profitable with us.</p>
            <p>
              Don't belive on us, just order the product you will start beliving
              yourself!
            </p>
            <p>Thanks for your ❣️ & 🤝</p>
          </div>
          <div className={classes.innerSection}>
            <h1 className={classes.title}>Explor</h1>
            <NavLink to="/shop/men" className={classes.link}>
              Men
            </NavLink>
            <NavLink to="/shop/women" className={classes.link}>
              Women
            </NavLink>
            <NavLink to="/shop/jewelery" className={classes.link}>
              Jewekery
            </NavLink>
            <NavLink to="/shop/electronics" className={classes.link}>
              Electronics
            </NavLink>
          </div>
          <div className={classes.innerSection}>
            <h1 className={classes.title}>Visit</h1>
            <span>LetsShop, 50 pawan nagar,</span>
            <span>Gandhi Bagh, Mumbai</span>
            <span>Maharashtara, India</span>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.innerSection}>
            <h1 className={classes.title}>Follow</h1>
            <NavLink to="" className={classes.link}>
              Instagram
            </NavLink>
            <NavLink to="" className={classes.link}>
              Facebook
            </NavLink>
            <NavLink to="" className={classes.link}>
              Twitter
            </NavLink>
            <NavLink to="" className={classes.link}>
              Linked
            </NavLink>
            <NavLink to="" className={classes.link}>
              WhatsApp
            </NavLink>
          </div>
          <div className={classes.innerSection}>
            <h1 className={classes.title}>Legal</h1>
            <NavLink to="" className={classes.link}>
              Terms
            </NavLink>
            <NavLink to="" className={classes.link}>
              Privacy
            </NavLink>
          </div>
          <div className={classes.innerSection}>
            <h1 className={classes.title}>More</h1>
            <NavLink to="" className={classes.link}>
              About
            </NavLink>
          </div>
        </div>
      </div>
      <div className={classes.containerTwo}>
        <span>©LetsShop. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
