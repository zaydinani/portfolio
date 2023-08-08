import React, { useState, useEffect, useContext } from 'react';
//react scroll
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
//theme context for dark mode
import { ThemeContext } from '../util/themeContext';
//my styles
import "../styles/nav.scss";

function Nav() {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState('');

  const toggleBodyClass = (newTheme) => {
    document.body.classList.remove(theme === 'dark' ? 'dark' : 'light');
    document.body.classList.add(newTheme === 'dark' ? 'dark' : 'light');
  };
  

  const handleToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    toggleTheme();
    toggleBodyClass(newTheme);
  };

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };


  return (
    <nav className={theme === 'dark' ? 'dark' : 'light'}>
      <ul>
        {location.pathname.startsWith('/project/') ? (
          <RouterLink  className='goHome navLink' to="/">
            Go Back Home
          </RouterLink >
        ) : (
          <>
            <Link
              className='navLink'
              activeClass="selected"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
              onSetActive={() => handleSetActiveSection('about')}
            >
              about
            </Link>
            <Link
              className='navLink'
              activeClass="selected"
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
              onSetActive={() => handleSetActiveSection('skills')}
            >
              skills
            </Link>
            <Link
              className='navLink'
              activeClass="selected"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
              onSetActive={() => handleSetActiveSection('projects')}
            >
              projects
            </Link>
            <Link
              className='navLink'
              activeClass="selected"
              to="features"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
              onSetActive={() => handleSetActiveSection('contact')}
            >
              features
            </Link>
            <Link
              className='navLink'
              activeClass="selected"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
              onSetActive={() => handleSetActiveSection('contact')}
            >
              contact
            </Link>
          </>
        )}
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