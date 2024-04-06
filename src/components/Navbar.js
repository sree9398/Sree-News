import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import logo from "../static/images/logo150.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="nav-class">
      <header>
        <NavLink to="/" className="navbar-brand">
          <img
            src={logo}
            alt="logo"
            style={{ width: "70px", height: "70px", borderRadius: "80px" }}
          />
          <strong> Sree-News</strong>
        </NavLink>
        <nav ref={navRef}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn " onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
