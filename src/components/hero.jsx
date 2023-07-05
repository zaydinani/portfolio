import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../themeContext';
import "../styles/hero.scss";

// Rest of the code...

function Hero() {
  const { theme } = useContext(ThemeContext);
  const [heroTheme, setTheme] = useState('');

  useEffect(() => {
    setTheme(theme === 'dark' ? 'dark' : 'light');
  }, [theme]);


    return (
      <div className="section">
        <div className={`hero ${heroTheme}`}>
          <div>
            <h1>hi, my name is zayd inani, i'm a developer from morocco</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis deserunt fuga, consectetur dignissimos vitae laborum repellat ea alias quos</p>
          </div>
          <div>
            <ul>
              <li className="btn main-btn"><a href="">Contact</a></li>
              <li className="btn secondary-btn"><a href="">Projects</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  export default Hero;
