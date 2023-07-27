import React, { useState, useEffect, useRef } from 'react';
// sending emails through email.js
import emailjs from '@emailjs/browser';
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
import data from "../data/data.json"

function main() {
    //! group skills into sets of 6
    const chunkSkills = (skills, size) => {
        return skills.reduce((acc, _, index) => {
        if (index % size === 0) {
            acc.push(skills.slice(index, index + size));
        }
        return acc;
        }, []);
    };
    const skillsData = data["zayd-data"].skills;
    const skillSets = chunkSkills(skillsData.skillSlide, 3);
    //! scroll to top arrow 
    useEffect(() => {
        const scrollIcon = document.querySelector('.scroll');
        window.addEventListener('scroll', () => {
          if (window.scrollY > 500) {
            scrollIcon.style.display = "block";
          } else {
            scrollIcon.style.display = "none";
          }
        });
      }, []);
    //! setting active section in nav bar
    const [activeSection, setActiveSection] = useState('');
    const handleSetActiveSection = (section) => {
      setActiveSection(section);
    };
    //! contact me form 
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs
        .sendForm(
            'service_9znrmsa', 
            'template_5ntcwsg', 
            form.current, 
            'e-FOTgYBMZ0Xwli1U'
        )
        .then((result) => {
            console.log("emailjs sent successfully");
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
  

    return (
        <>
            {/* scroll up */}
            <Link
                to="hero"
                spy={true}
                smooth={true}
                duration={1000}
                offset={0}
            >
                <div className="scroll"  style={{ display: 'none' }}>
                    <img src="/chevron-up-solid.svg" alt="" />
                </div>
            </Link>
            <Element name="hero">
                <div className="section" id='hero'>
                    <div className="hero container">
                        <div>
                            <h1>{data['zayd-data'].hero.title}</h1>
                            <p>{data['zayd-data'].hero.text}</p>
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
            <Element name="about" id="about">
                <div className="about container" id='about'>
                    <div className="about-info">
                        <div>
                            <h1>{data['zayd-data'].about.title}</h1>
                            <p>{data['zayd-data'].about.text}</p>
                            <p>{data['zayd-data'].about.secondaryText}</p>
                        </div>
                        <Socials />
                        <div>
                            <ul>
                                <li className=" btn main-btn"><a href="/Orientalism by Edward Said.pdf" download>download cv</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img src={data['zayd-data'].about.image} alt="" />
                    </div>
                </div>
            </Element>
            {/* SKILLS */}
            <Element name="skills">
                <div className='skills--container'>
                    <div className=" skills">
                        <div className="info">
                            <h1>{data['zayd-data'].skills.title}</h1>
                            <p>{data['zayd-data'].skills.text}</p>
                        </div>
                        <div>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                {skillSets.map((skillSet, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="skills-container">
                                            {skillSet.map((skill, subIndex) => (
                                                <Skills
                                                    key={subIndex}
                                                    icon={skill.icon}
                                                    title={skill.title}
                                                    description={skill.description}
                                                />
                                            ))}
                                        </div>
                                    </SwiperSlide>
                                ))}
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
                            <h1>{data['zayd-data'].projects.title}</h1>
                            <p>{data['zayd-data'].projects.text}</p>
                        </div>
                        <div className="projects">
                            {data['zayd-data'].projects.project.map((project, index) => (
                                <Projects 
                                    key={index}
                                    image={project.projectImage}
                                    title={project.projectTitle}
                                    date={project.projectDate}
                                    description={project.projectDescription}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Element>
            {/*FEATURES*/}
            <Element name="features">
                <div className="container">
                    <div className="features">
                        <div className="info">
                            <h1>{data['zayd-data'].features.title}</h1>
                            <p>{data['zayd-data'].features.text}</p>
                        </div>
                        <div className="features-icons">
                            {data['zayd-data'].features.feature.map((feature, index) => (
                                <Features 
                                    key={index} 
                                    image={feature.image} 
                                    title={feature.title} 
                                    description={feature.description} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Element>
            {/*CONTACT*/}
            <Element name="contact">
                <div className="container" id='contact'>
                    <div className="contact">
                        <div className="info">
                            <h1>{data['zayd-data'].contact.title}</h1>
                            <p>{data['zayd-data'].contact.text}</p>
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <input name="user_name" type="text" placeholder="Enter your name" />
                            <input name="user_email" type="text" placeholder="Enter your email" />
                            <textarea  name="message" placeholder="Enter your message"></textarea>
                            <input className='submit' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </Element>
        </>
    );
}
export default main;
