import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
//react scroll
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//my styles
import "../styles/main.scss";
//my components
import Socials from "../components/socialIcons";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Features from "../components/features";

function main() {
    const [activeSection, setActiveSection] = useState('');

    const handleSetActiveSection = (section) => {
      setActiveSection(section);
    };
    return (
        <>
            {/* HERO */}
            <Element name="hero">
                <div className="section" id='hero'>
                    <div className="hero container">
                        <div>
                            <h1>hi, my name is zayd inani, i'm a developer from morocco</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis deserunt fuga, consectetur dignissimos vitae laborum repellat ea alias quos</p>
                        </div>
                        <div>
                            <ul>
                                <Link
                                    className='btn main-btn'
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    offset={0}
                                    onSetActive={() => handleSetActiveSection('contact')}
                                    >
                                    contact
                                </Link>
                                <Link
                                    className='btn secondary-btn'
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    offset={0}
                                    onSetActive={() => handleSetActiveSection('contact')}
                                    >
                                    projects
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </Element>
            {/* ABOUT */}
            <Element name="about">
                <div className="about container" id='about'>
                    <div className="about-info">
                        <div>
                            <h1>about</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta ex autem voluptate fugiat fugit enim. Dicta saepe asperiores quod totam ratione doloribus sint placeat officia, iure nihil soluta inventore!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <Socials />
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
            </Element>
            {/* SKILLS */}
            <Element name="skills">
                <div className="skills-section" id='skills'>
                    <div className=" skills container">
                        <div className="info">
                            <h1>skills</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, exercitationem vitae! In iure reiciendis eligendi repellat perferendis et magnam repudiandae nemo, non voluptatum, esse, officia ex inventore</p>
                        </div>
                        <div>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide>
                                    <div className="skills-container">
                                        < Skills
                                            icon="/icon _file type html_.svg"
                                            title='HTMl'
                                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis '
                                        />
                                        < Skills
                                            icon="/icon _file type css_.svg"
                                            title='CSS'
                                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis '
                                        />
                                        < Skills
                                            icon="/icon _file type js official_.svg"
                                            title='JavaScript'
                                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis '
                                        />
                                        < Skills
                                            icon="/icon _file type reactjs_.svg"
                                            title='React'
                                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis '
                                        />
                                        < Skills
                                            icon="/icon _file type node_.svg"
                                            title='NodeJs'
                                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis '
                                        />                                    
                                        < Skills
                                            icon="/icons8-express-js.svg"
                                            title='ExpressJS'
                                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis '
                                        />  
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="skills-container">
                                        < Skills
                                            icon="/iconmonstr-github-1.svg"
                                            title='GitHub'
                                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis '
                                        />                                  
                                        < Skills
                                            icon="/icon _file type git_.svg"
                                            title='GIT'
                                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis '
                                        />   
                                        < Skills
                                            icon="/bootstrap-4.svg"
                                            title='BootStrap'
                                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis '
                                        />  
                                        < Skills
                                            icon="/icons8-sass-avatar.svg"
                                            title='SASS'
                                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis '
                                        />     
                                        < Skills
                                            icon="/mysql.svg"
                                            title='MySQL'
                                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis '
                                        />                                  
                                        < Skills
                                            icon="/php-icon.svg"
                                            title='PHP'
                                            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis '
                                        /> 
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </Element>
            {/*PROJECTS*/}
            <Element name="projects">
                <div className="container" id='projects'>
                    <div className="projects-container">
                        <div className="info">
                            <h1>projects</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, exercitationem vitae! In iure reiciendis eligendi repellat perferendis et magnam repudiandae nemo, non voluptatum, esse, officia ex inventore</p>
                        </div>
                        <div className="projects">
                            <Projects 
                                image="/nav-logo.png"
                                title='project title'
                                date='12 jan 2023'
                                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nihil molestiae, ullam optio corrupti doloribus adipisci tenetur ex atque'
                            />
                            <Projects 
                                image="/nav-logo.png"
                                title='project title'
                                date='12 jan 2023'
                                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nihil molestiae, ullam optio corrupti doloribus adipisci tenetur ex atque'
                            />
                            <Projects 
                                image="/nav-logo.png"
                                title='project title'
                                date='12 jan 2023'
                                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nihil molestiae, ullam optio corrupti doloribus adipisci tenetur ex atque'
                            />
                            <Projects 
                                image="/nav-logo.png"
                                title='project title'
                                date='12 jan 2023'
                                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nihil molestiae, ullam optio corrupti doloribus adipisci tenetur ex atque'
                            />
                        </div>
                    </div>
                </div>
            </Element>
            {/*FEATURES*/}
            <div className="container">
                <div className="features">
                    <div className="info">
                        <h1>features</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, exercitationem vitae! In iure reiciendis eligendi repellat perferendis et magnam repudiandae nemo, non voluptatum, esse, officia ex inventore</p>
                    </div>
                    <div className="features-icons">
                        <Features 
                            image="/clock.svg"
                            title="fast"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit."
                        />
                        <Features 
                            image="/eye.svg"
                            title="Intuitive"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit."
                        />
                        <Features 
                            image="/layout.svg"
                            title="Responsive"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit."
                        />
                        <Features 
                            image="/activity.svg"
                            title="Dynamic"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit."
                        />
                    </div>
                </div>
            </div>
            {/*CONTACT*/}
            <Element name="contact">
                <div className="container" id='contact'>
                    <div className="contact">
                        <div className="info">
                            <h1>contact me</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, exercitationem vitae! In iure </p>
                        </div>
                        <form action="">
                            <input type="text" placeholder="Enter your text" />
                            <input type="text" placeholder="Enter your text" />
                            <textarea placeholder="Enter your message"></textarea>
                            <button>submit</button>
                        </form>
                    </div>
                </div>
            </Element>
        </>
    );
}
export default main;
