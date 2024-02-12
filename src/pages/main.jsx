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
import projectsData from "../data/projects.json"

function Main() {
    const [emailStatus, setEmailStatus] = useState(null);

    const projects = Object.values(projectsData);

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
            setEmailStatus("success");
            e.target.reset()
        })
        .catch((error) => {
            console.log(error.text)
            setEmailStatus("error"); 
        })
    }

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
                    <img src="/icons/chevron-up-solid.svg" alt="go up icon" />
                </div>
            </Link>
            <Element name="hero">
                <div className="section" id='hero'>
                    <div className="hero container">
                        <header>
                            <h1>{data['zayd-data'].hero.title}</h1>
                            <p>{data['zayd-data'].hero.text}</p>
                        </header>
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
                <section className="about container" id='about'>
                    <div className="about-info">
                        <div>
                            <h2>{data['zayd-data'].about.title}</h2>
                            <p>{data['zayd-data'].about.text}</p>
                            <p>{data['zayd-data'].about.secondaryText}</p>
                        </div>
                        <Socials />
                        <div>
                            <ul>
                                <li className=" btn main-btn"><a href="/resume/zayd inani cv.pdf" download>download cv</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="imgContainer"  xyz="fade right">
                        <img src={data['zayd-data'].about.image} alt="Zayd Inani personal image" />
                    </div>
                </section>
            </Element>
            {/* SKILLS */}
            <Element name="skills">
                <section className='skills--container'>
                    <div className=" skills">
                        <div className="info">
                            <h2>{data['zayd-data'].skills.title}</h2>
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
                </section>
            </Element>
            {/*PROJECTS*/}
            <Element name="projects">
                <section className="container" id='projects'>
                    <div className="projects-container">
                        <div className="info">
                            <h2>{data['zayd-data'].projects.title}</h2>
                            <p>{data['zayd-data'].projects.text}</p>
                        </div>
                        <div className="projects">
                            {projects.map((project, index) => (
                                <Projects
                                    key={index}
                                    name={project.name}
                                    index={index}
                                    image={project.projectLogo}
                                    title={project.name}
                                    date={project.date}
                                    description={project.description.mainDescription}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </Element>
            {/*FEATURES*/}
            <Element name="features">
                <section className="container">
                    <div className="features">
                        <div className="info">
                            <h2>{data['zayd-data'].features.title}</h2>
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
                </section>
            </Element>
            {/*CONTACT*/}
            <Element name="contact">
                <section className="container" id='contact'>
                    <div className="contact">
                        <div className="info">
                            <h2>{data['zayd-data'].contact.title}</h2>
                            <p>{data['zayd-data'].contact.text}</p>
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            {/* Form inputs here */}
                            <input name="user_name" type="text" placeholder="Enter your name"  required/>
                            <input name="user_email" type="email" placeholder="Enter your email" required/>
                            <textarea name="message" placeholder="Enter your message" required></textarea>
                            <input className='submit' type="submit" value="Send" />
                        </form>
                        {emailStatus === "success" && (
                            <div class="alert alert-2-success">
                                <h3 class="alert-title">success</h3>
                                <p class="alert-content">your email have been sent successfully</p>
                            </div>
                        )}
                        {emailStatus === "error" && (
                            <div class="alert alert-3-danger">
                                <h3 class="alert-title">error</h3>
                                <p class="alert-content">an error has occurred please try again later</p>
                            </div>
                        )}
                    </div>
                </section>
            </Element>
        </>
    );
}
export default Main;