import React, { useState, useEffect, useContext } from 'react';
import "../styles/nav.scss";
import { ThemeContext } from '../themeContext';

function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleBodyClass = (newTheme) => {
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
  };

  const handleToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    toggleTheme();
    toggleBodyClass(newTheme);
  };

  return (
    <nav className={theme === "dark" ? "dark" : "light"}>
      <ul>
        <li className="selected"><a href="">about</a></li>
        <li><a href="">skills</a></li>
        <li><a href="">projects</a></li>
        <li><a href="">contact</a></li>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            checked={theme === 'dark'}
            onChange={handleToggleTheme}
          />
          <label htmlFor="checkbox" className="label">
            <img className="fa-sun" src="/sun-solid.png" alt="" />
            <img className="fa-moon" src="/moon purple.png" alt="" />
            <div className="ball"></div>
          </label>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;