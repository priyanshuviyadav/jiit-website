import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import NavLi from "./NavLi/NavLi";
import DropDownLI from "./NavLi/DropDown/DropDownLI";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import SearchIcon from "@mui/icons-material/Search";
import LockIcon from "@mui/icons-material/Lock";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useVarContext } from "../../../../ContextApi/createConText";

const Navbar = () => {
  const [show, setShow] = useState("");
  const global = useVarContext();

  const toggle = () => {
    if (show === "active") {
      setShow("");
    } else {
      setShow("active");
    }
  };

  return (
    <nav className={global.showNav ? "activeNav" : "navbar"}>
      <div className="container">
        <div className="navbar-header">
          <div className="nav_logo">
            <NavLink to="/">
              <div className="logo-text12">
                <img
                  src={
                    global.showNav
                      ? "images/12-footer/logo.jpg"
                      : "images/1-logo/logo.jpg"
                  }
                  alt="logo"
                />
                <h1 className="logo-text">JIITS</h1>
              </div>
            </NavLink>
          </div>

          {/* <div className="categoris">
            <CalendarViewMonthIcon
              className={`'nai' ${global.showNav && "activeColor"}`}
            />
            <span className={`'nai' ${global.showNav && "activeColor"}`}>
              CATEGORIES
            </span>
          </div> */}

          <div className="toggel-button1">
            <DehazeIcon
              className={`nav-toggel-button btn-disable ${
                global.showNav && "activeColor"
              }`}
              onClick={toggle}
            />
          </div>

          <div className={`nav-menu  ${show}`}>
            <ul className="main-menu d-flex ">
              {/* <NavLi text='home' />
              <NavLi text='About ' /> */}

              {/* Drop Down start */}
              <DropDownLI text="home" xyx="home" icon="+" icon1="-" />
              <DropDownLI text="about" xyz="about" icon="+" icon1="-" />
              <DropDownLI text="IT Courses" xyz="IT" icon="+" icon1="-" />
              <DropDownLI text="Traiding Course" xyz="traiding" icon="+" icon1="-" />
              <NavLi text="Marketing Solution" xyz="marketing" />
              <NavLi text="Contact" xyz="contact" />
            </ul>

            <ul className="right-main-menu">
              <li>
                <SearchIcon
                  className={`'nai' ${global.showNav && "activeColor"}`}
                />
              </li>
              <li>
                <LockIcon
                  className={`'nai' ${global.showNav && "activeColor"}`}
                />
              </li>
              <li>
                <DehazeIcon
                  className={`'nai' ${global.showNav && "activeColor"}`}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
