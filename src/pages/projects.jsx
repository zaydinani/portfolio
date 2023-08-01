import React, { useState } from 'react';

import '../styles/projects.scss'
function Project() {
    const [showGallery, setShowGallery] = useState(false);
    // Function to toggle the visibility of the gallery
    const toggleGallery = () => {
        setShowGallery(!showGallery);
    };
    // Function to close the gallery
    const closeGallery = () => {
        setShowGallery(false);
    };

    return(
        <div className="project--container">
            <div className="title">
                <h1>ecommerce website</h1>
                <p>12 jan 2023</p>
            </div>
            <div className="image--container" onClick={toggleGallery}>
                <div className='main--img'>
                    <img src="/zayd.jpg" alt="" />
                </div>
                <div className='sec-images'>
                    <div>
                        <img src="/zayd.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/zayd.jpg" alt="" />
                    </div>   
                </div>
            </div>
            <div className="project--info">
                <div className="project--description">
                    <h1>about project</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quibusdam sunt, quasi numquam error facere necessitatibus nihil suscipit pariatur dolorum similique beatae, hic in nemo nulla vel debitis? Delectus, quae?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quibusdam sunt, quasi numquam error facere necessitatibus nihil suscipit pariatur dolorum similique beatae, hic in nemo nulla vel debitis? Delectus, quae?</p>
                    <div>
                        <ul>
                            <li className='btn main-btn'> visit website </li>
                            <li className='btn secondary-btn'>open on github</li>
                        </ul>
                    </div>
                </div>
                <div className="project--tools">
                    <div className='project--type'>
                        <h1>type</h1>
                        <p>store</p>
                    </div>
                    <div className='projects--languages'>
                        <h1>languages/frameworks</h1>
                        <div className='languages'>
                            <div>
                                <img src="/icon _file type node_.svg" alt="" />
                            </div>
                            <div>
                                <img src="/mongodb-icon.svg" alt="" />
                            </div>
                            <div>
                                <img src="/icon _file type reactjs_.svg" alt="" />
                            </div>
                            <div>
                                <img src="/icons8-sass-avatar.svg" alt="" />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className={`gallery--container ${showGallery ? "show" : ""}`} onClick={closeGallery}>
                <h1>all screen shots</h1>
                <div className="gallery">
                    <div>
                        <img src="/zayd.jpg" alt="" />
                    </div> 
                    <div>
                        <img src="/zayd.jpg" alt="" />
                    </div> 
                    <div>
                        <img src="/zayd.jpg" alt="" />
                    </div> 
                    <div>
                        <img src="/zayd.jpg" alt="" />
                    </div>   
                    <div>
                        <img src="/zayd.jpg" alt="" />
                    </div>  
                    <div>
                        <img src="/zayd.jpg" alt="" />
                    </div>  
                    <div>
                        <img src="/zayd.jpg" alt="" />
                    </div>  
                    <div>
                        <img src="/zayd.jpg" alt="" />
                    </div>  
                    <div>
                        <img src="/zayd.jpg" alt="" />
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default Project;
