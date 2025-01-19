import React, { useState, useEffect, useContext } from "react";
//react scroll
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import data from "../data/data.json";

//theme context for dark mode
import { ThemeContext } from "../util/themeContext";
//my styles
import "../styles/nav.scss";

function Nav() {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState("");

  const toggleBodyClass = (newTheme) => {
    document.body.classList.remove(theme === "dark" ? "dark" : "light");
    document.body.classList.add(newTheme === "dark" ? "dark" : "light");
  };

  const handleToggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    toggleTheme();
    toggleBodyClass(newTheme);
  };

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  //-----------------
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <nav
      className={`nav ${isMenuActive ? "is-active" : ""} ${
        theme === "dark" ? "dark" : "light"
      }`}
    >
      <button
        className={`hamburger ${isMenuActive ? "is-active" : ""}`}
        onClick={toggleMenu}
        aria-label="Open navigation menu"
      >
        <div className="bar"></div>
      </button>
      <div className="logo">
        <a href={data["zayd-data"].about.portfolioDomain}>
          <img
            rel="preload"
            as="image"
            src={data["zayd-data"].about.logo}
            alt="portfolio logo"
            loading="lazy"
            type="image/webp"
          />
        </a>
      </div>
      <ul>
        {location.pathname.startsWith("/project/") ? (
          <RouterLink className="goHome navLink" to="/">
            Go Back Home
          </RouterLink>
        ) : (
          <>
            <Link
              className="navLink"
              activeClass="selected"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
              onSetActive={() => handleSetActiveSection("about")}
            >
              about
            </Link>
            <Link
              className="navLink"
              activeClass="selected"
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
              onSetActive={() => handleSetActiveSection("skills")}
            >
              skills
            </Link>
            <Link
              className="navLink"
              activeClass="selected"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
              onSetActive={() => handleSetActiveSection("projects")}
            >
              projects
            </Link>
            <Link
              className="navLink"
              activeClass="selected"
              to="features"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
              onSetActive={() => handleSetActiveSection("contact")}
            >
              features
            </Link>
            <Link
              className="navLink"
              activeClass="selected"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
              onSetActive={() => handleSetActiveSection("contact")}
            >
              contact
            </Link>
          </>
        )}
        <div className="navLink">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            checked={theme === "dark"}
            onChange={handleToggleTheme}
          />
          <label htmlFor="checkbox" className="label">
            <img
              className="fa-sun"
              src="/icons/sun-solid.webp"
              alt="sun icon"
            />
            <img
              className="fa-moon"
              src="/icons/moon purple.webp"
              alt="moon icon"
            />
            <div className="ball"></div>
          </label>
        </div>
        {isMenuActive ? (
          location.pathname.startsWith("/project/") ? (
            <RouterLink
              className="mobileNavLinkHome"
              to="/"
              onClick={() => {
                closeMenu();
                setActiveSection(""); // Clear active section
              }}
            >
              Go Back Home
            </RouterLink>
          ) : (
            <div className="mobileNavContainer">
              <Link
                className={`mobileNavLink ${
                  activeSection === "about" ? "selected" : ""
                }`}
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                offset={0}
                onSetActive={() => handleSetActiveSection("about")}
                onClick={closeMenu}
              >
                about
              </Link>
              <Link
                className={`mobileNavLink ${
                  activeSection === "skills" ? "selected" : ""
                }`}
                to="skills"
                spy={true}
                smooth={true}
                duration={1000}
                offset={0}
                onSetActive={() => handleSetActiveSection("skills")}
                onClick={closeMenu}
              >
                skills
              </Link>
              <Link
                className={`mobileNavLink ${
                  activeSection === "projects" ? "selected" : ""
                }`}
                to="projects"
                spy={true}
                smooth={true}
                duration={1000}
                offset={0}
                onSetActive={() => handleSetActiveSection("projects")}
                onClick={closeMenu}
              >
                projects
              </Link>
              <Link
                className={`mobileNavLink ${
                  activeSection === "features" ? "selected" : ""
                }`}
                to="features"
                spy={true}
                smooth={true}
                duration={1000}
                offset={0}
                onSetActive={() => handleSetActiveSection("features")}
                onClick={closeMenu}
              >
                features
              </Link>
              <Link
                className={`mobileNavLink ${
                  activeSection === "contact" ? "selected" : ""
                }`}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                offset={0}
                onSetActive={() => handleSetActiveSection("contact")}
                onClick={closeMenu}
              >
                contact
              </Link>
              <div>
                <input
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                  checked={theme === "dark"}
                  onChange={handleToggleTheme}
                />
                <label htmlFor="checkbox" className="label">
                  <img
                    className="fa-sun"
                    src="/icons/sun-solid.webp"
                    alt="sun icon"
                  />
                  <img
                    className="fa-moon"
                    src="/icons/moon purple.webp"
                    alt="moon icon"
                  />
                  <div className="ball"></div>
                </label>
              </div>
            </div>
          )
        ) : null}
      </ul>
    </nav>
  );
}

export default Nav;
