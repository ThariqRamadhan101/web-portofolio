import React, { useState } from "react";
import "./header.css";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineClipboardList,
  HiOutlinePhotograph,
  HiOutlineMail,
  HiX,
  HiOutlineMenu,
  HiOutlineFolder,
} from "react-icons/hi";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header?.classList.add("scroll-header");
    else header?.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Thariq Portofolio
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <HiOutlineHome className="nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <HiOutlineUser className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#myJourney"
                onClick={() => setActiveNav("#myJourney")}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineClipboardList className="nav__icon" />
                My Journey
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#learning"
                onClick={() => setActiveNav("#learning")}
                className={
                  activeNav === "#learning"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineFolder className="nav__icon" />
                Learning
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlinePhotograph className="nav__icon" />
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineMail className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
          <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <HiOutlineMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
