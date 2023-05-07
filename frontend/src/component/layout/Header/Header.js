import React, { useState } from "react";
import "./Header.css";
import {FcSearch} from "react-icons/fc";
import {FaShoppingCart} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink,Link } from "react-router-dom";

const Header = () => {
  const [showIcons, setShowIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>E</span>commerce
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <NavLink to={`/products`}>products</NavLink>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <Link
                to="/search">
                <FcSearch className="FcSearch" />
              </Link>
            </li>
            <li>
              <Link
                to="/Cart">
                <FaShoppingCart className="FaShoppingCart" />
              </Link>
            </li>
            <li>
              <Link
                to="/login">
                <CgProfile className="CgProfile" />
              </Link>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowIcons(!showIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;