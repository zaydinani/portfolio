import "../styles/about.scss"
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../themeContext';

function About() {
    const { theme } = useContext(ThemeContext);
    const [heroTheme, setTheme] = useState('');
  
    useEffect(() => {
      setTheme(theme === 'dark' ? 'dark' : 'light');
    }, [theme]);
  
    
    return (
        <div className="section">
            <div className={`about container ${heroTheme}`}  >
                <div className="info">
                    <div>
                        <h1>about</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta ex autem voluptate fugiat fugit enim. Dicta saepe asperiores quod totam ratione doloribus sint placeat officia, iure nihil soluta inventore!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <a href="">
                            <svg className="socialIcons" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="&#240;&#159;&#166;&#134; icon &#34;facebook squared&#34;">
                                    <path className="Vector" d="M26 8.44444V19.5556C26 23.3908 22.8908 26.5 19.0556 26.5H7.94444C4.10914 26.5 1 23.3908 1 19.5556V8.44444C1 4.60914 4.10914 1.5 7.94444 1.5H19.0556C22.8908 1.5 26 4.60914 26 8.44444Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path className="Vector_2" d="M12.1111 26.5C12.1111 22.3333 12.1111 18.1667 12.1111 14C12.1111 10.9618 12.8056 8.44446 17.6667 8.44446" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path className="Vector_3" d="M9.33331 15.3889H12.1111H17.6666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                        </a>
                        <a href="">
                        <svg className="socialIcons" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="&#240;&#159;&#166;&#134; icon &#34;instagram&#34;">
                                    <path className="Vector" d="M13.5 19.5556C16.5682 19.5556 19.0556 17.0682 19.0556 14C19.0556 10.9318 16.5682 8.44446 13.5 8.44446C10.4318 8.44446 7.94446 10.9318 7.94446 14C7.94446 17.0682 10.4318 19.5556 13.5 19.5556Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path className="Vector_2" d="M1 19.5556V8.44444C1 4.60914 4.10914 1.5 7.94444 1.5H19.0556C22.8908 1.5 26 4.60914 26 8.44444V19.5556C26 23.3908 22.8908 26.5 19.0556 26.5H7.94444C4.10914 26.5 1 23.3908 1 19.5556Z" stroke-width="2"/>
                                    <path className="Vector_3" d="M21.1389 6.37499L21.1527 6.35956" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                        </a>
                        <a href="">
                        <svg className="socialIcons" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="&#240;&#159;&#166;&#134; icon &#34;linkedin&#34;">
                                    <path className="Vector" d="M26 8.44444V19.5556C26 23.3908 22.8908 26.5 19.0556 26.5H7.94444C4.10914 26.5 1 23.3908 1 19.5556V8.44444C1 4.60914 4.10914 1.5 7.94444 1.5H19.0556C22.8908 1.5 26 4.60914 26 8.44444Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path className="Vector_2" d="M6.55554 20.9445V16.0834V11.2223" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path className="Vector_3" d="M12.1111 20.9445V16.4306M12.1111 16.4306V11.2223M12.1111 16.4306C12.1111 11.2223 20.4444 11.2223 20.4444 16.4306V20.9445" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path className="Vector_4" d="M6.55554 7.06945L6.56943 7.05402" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                        </a>
                        <a href="">
                        <svg className="socialIcons" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="&#240;&#159;&#166;&#134; icon &#34;github outline&#34;">
                                    <path className="Vector" d="M13.5 26.5C6.5965 26.5 1 20.9035 1 14C1 7.09644 6.5965 1.5 13.5 1.5C20.4036 1.5 26 7.09644 26 14C26 20.9035 20.4036 26.5 13.5 26.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path className="Vector_2" d="M10.5834 22.75V20.4212C10.5522 20.0344 10.6058 19.6454 10.7409 19.2802C10.8759 18.9151 11.0893 18.5821 11.3667 18.3035C8.75005 18.0195 6.00005 17.0539 6.00005 12.6236C6.0003 11.4907 6.4478 10.4013 7.25005 9.58076C6.87017 8.58964 6.89705 7.4941 7.32505 6.52174C7.32505 6.52174 8.30842 6.23775 10.5834 7.72264C12.4934 7.2186 14.5067 7.2186 16.4167 7.72264C18.6917 6.23775 19.6751 6.52174 19.6751 6.52174C20.1031 7.4941 20.1299 8.58964 19.7501 9.58076C20.5583 10.4074 21.0063 11.5066 21.0001 12.6479C21.0001 17.0458 18.2501 18.0114 15.6334 18.3278C15.9075 18.6036 16.119 18.9326 16.254 19.2934C16.3889 19.654 16.4444 20.0382 16.4167 20.4212V22.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path className="Vector_3" d="M16.4167 21.1272C18.9167 21.9169 21 21.1272 22.25 18.693" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <ul>
                            <li className=" btn main-btn"><a href="">download cv</a></li>
                        </ul>
                    </div>
                </div>
                <div className="imgContainer">
                    <img src="/zayd.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default About
