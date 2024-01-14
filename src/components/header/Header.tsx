import { useState } from "react";
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
import ReactTyped from "react-typed";

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
          <ReactTyped
            strings={["Thariq", "Thoriq", "Toim"]}
            typeSpeed={200}
            loop
            backDelay={5000}
            backSpeed={50}
            cursorChar="|"
            showCursor={true}
          />
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
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlineFolder className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#journey"
                onClick={() => setActiveNav("#journey")}
                className={
                  activeNav === "#journey"
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
                href="#portofolio"
                onClick={() => setActiveNav("#portofolio")}
                className={
                  activeNav === "#portofolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <HiOutlinePhotograph className="nav__icon" />
                Portofolio
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
