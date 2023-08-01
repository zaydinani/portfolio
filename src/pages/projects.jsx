import React, { useState, useRef, useEffect } from 'react';
import '../styles/projects.scss'

function Project() {
    const [showGallery, setShowGallery] = useState(false);
    const [clickedImageUrl, setClickedImageUrl] = useState('');
  
    // Ref for the gallery container
    const galleryRef = useRef(null);
  
    // Function to toggle the visibility of the gallery
    const toggleGallery = () => {
      setShowGallery(!showGallery);
    };
  
    // Function to close the gallery
    const closeGallery = () => {
      setShowGallery(false);
    };
  
    // Function to handle image click and display the gallery
    const handleImageClick = (imageUrl, event) => {
        // Stop the event propagation to prevent closing the gallery
        event.stopPropagation();
        setClickedImageUrl(imageUrl);
        setShowGallery(true);
    };
      
    // Function to close the enlarged image when clicking outside of it
    const handleClickOutsideImage = (event) => {
        if (
          galleryRef.current &&
          !galleryRef.current.contains(event.target) &&
          !event.target.classList.contains('enlarged-image')
        ) {
          // Check if clicked element is not part of the enlarged-image div
          // and clickedImageUrl is empty, then close the gallery
          setClickedImageUrl('');
        }
      };

    // Function to close the enlarged image when clicking on it
    const handleCloseEnlargedImage = (event) => {
        event.stopPropagation();
        setClickedImageUrl('');
      };
    // Attach the click event listener when the component mounts
    useEffect(() => {
        document.addEventListener('click', handleClickOutsideImage);
        return () => {
        document.removeEventListener('click', handleClickOutsideImage);
        };
    }, []);
    
  

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
            <div 
                className={`gallery--container ${showGallery ? 'show' : ''}`} 
                ref={galleryRef} 
                onClick={closeGallery}
            >
                <h1>all screen shots</h1>
                <div className="gallery">
                    <div onClick={(event) => handleImageClick("/zayd.jpg", event)}>
                        <img src="/zayd.jpg" alt="" />
                    </div> 
                    <div onClick={(event) => handleImageClick("/zayd.jpg", event)}>
                        <img src="/zayd.jpg" alt="" />
                    </div> 
                    <div onClick={(event) => handleImageClick("/zayd.jpg", event)}>
                        <img src="/zayd.jpg" alt="" />
                    </div> 
                    <div onClick={(event) => handleImageClick("/zayd.jpg", event)}>
                        <img src="/zayd.jpg" alt="" />
                    </div> 
                    <div onClick={(event) => handleImageClick("/zayd.jpg", event)}>
                        <img src="/zayd.jpg" alt="" />
                    </div> 
                    <div onClick={(event) => handleImageClick("/zayd.jpg", event)}>
                        <img src="/zayd.jpg" alt="" />
                    </div> 
                    <div onClick={(event) => handleImageClick("/zayd.jpg", event)}>
                        <img src="/zayd.jpg" alt="" />
                    </div> 
                    <div onClick={(event) => handleImageClick("/zayd.jpg", event)}>
                        <img src="/zayd.jpg" alt="" />
                    </div> 
                    <div onClick={(event) => handleImageClick("/zayd.jpg", event)}>
                        <img src="/zayd.jpg" alt="" />
                    </div> 
                    <div onClick={(event) => handleImageClick("/zayd.jpg", event)}>
                        <img src="/zayd.jpg" alt="" />
                    </div> 
                </div>
                {clickedImageUrl && (
                    <div className="enlarged-image" onClick={handleCloseEnlargedImage}>
                        {/* Image with onClick event to close the enlarged image */}
                        <img src={clickedImageUrl} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}
export default Project;
