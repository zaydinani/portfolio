import React, { useState, useRef, useEffect } from 'react';
import projectsData from '../data/projects.json'
import { useParams } from 'react-router-dom';
import '../styles/projectsPage.scss'

function Project() {
    const projectArray = Object.values(projectsData);

    const { index } = useParams();
    const projectData = projectArray[index];
    console.log(projectData);
    console.log(index);

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
                <h1>{projectData.name}</h1>
                <p>{projectData.date}</p>
            </div>
            <div className="image--container" onClick={toggleGallery}>
                <div className='main--img'>
                    <img src={projectData.screenShots[0]} alt="" />
                </div>
                <div className='sec-images'>
                    <div>
                        <img src={projectData.screenShots[1]} alt="" />
                    </div>
                    <div>
                        <img src={projectData.screenShots[2]} alt="" />
                    </div>   
                </div>
            </div>
            <div className="project--info">
                <div className="project--description">
                    <h1>about project</h1>
                    <p>{projectData.description.mainDescription}</p>
                    <p>{projectData.description.secondaryDescription}</p>
                    <div>
                        <ul>
                            {projectData.url && (
                                <li className='btn main-btn'>
                                    <a href={projectData.url} target="_blank">Visit Website</a>
                                </li>
                            )}
                            <li className='btn secondary-btn'><a href={projectData.githubUrl} target="_blank">open on github</a></li>
                        </ul>
                    </div>
                </div>
                <div className="project--tools">
                    <div className='project--type'>
                        <h1>type</h1>
                        <p>{projectData.type}</p>
                    </div>
                    <div className='projects--languages'>
                        <h1>languages/frameworks</h1>
                        <div className='languages'>
                            {Object.keys(projectData.languages).map((languageKey) => (
                                <div key={languageKey}>
                                    <img src={projectData.languages[languageKey]} alt={languageKey} />
                                </div>
                            ))}
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
                    {projectData.screenShots.map((image, index) => (
                        <div key={index} onClick={(event) => handleImageClick(image, event)}>
                        <img src={image} alt={`Screenshot ${index + 1}`} />
                        </div>
                    ))}
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
