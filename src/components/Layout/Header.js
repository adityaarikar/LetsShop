import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  console.log(classes);

  const handleClick = () => {
    return setClicked(!clicked);
  };

  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = Object.keys(cartItems).length;
  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navContainer}>
          <NavLink exact="true" to="/" className={classes.navLogo}>
            <FaShoppingBasket size={50} color="black" />
          </NavLink>
          <div
            className={
              clicked
                ? classes.linkContainer
                : classes.linkContainer + " " + classes.close
            }
          >
            <ul className={classes.link}>
              <li className={classes.liElement}>
                <NavLink
                  to="/shop/men"
                  activeClassName={classes.active}
                  className={classes.links}
                >
                  Men
                </NavLink>
              </li>
              <li className={classes.liElement}>
                <NavLink
                  to="/shop/women"
                  activeClassName={classes.active}
                  className={classes.links}
                >
                  Women
                </NavLink>
              </li>
              <li className={classes.liElement}>
                <NavLink
                  to="/shop/jewelery"
                  activeClassName={classes.active}
                  className={classes.links}
                >
                  Jewelery
                </NavLink>
              </li>
              <li className={classes.liElement}>
                <NavLink
                  to="/shop/electronics"
                  activeClassName={classes.active}
                  className={classes.links}
                >
                  Electronics
                </NavLink>
              </li>
            </ul>
            <div className={classes.profileCartContainer}>
              <NavLink
                to="/profile"
                activeClassName={classes.activeNavBtn}
                className={classes.navBtn}
              >
                <FaUserAlt size={25} className={classes.icon} />
              </NavLink>
              <NavLink
                to="/cart"
                activeClassName={classes.activeNavBtn}
                className={classes.navBtn}
              >
                <div className={classes.cartContainer}>
                  <div className={classes.cartBtn}>
                    <FaCartArrowDown size={25} className={classes.icon} />
                    <h3>{cartCount}</h3>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <div className={classes.menuToggle} onClick={handleClick}>
            <FaTimes
              size={20}
              color="black"
              className={
                clicked ? "" : classes.displayToggle + " " + classes.faTimes
              }
            />
            <FaBars
              size={20}
              color="black"
              className={
                clicked ? classes.displayToggle + " " + classes.faBars : ""
              }
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
