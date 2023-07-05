import "../styles/skills.scss";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

function Skills() {
    return (
      <div className="section">
        <div className="container">
            <div className="skills">
                <div className="skills-info">
                    <h1>skills</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, exercitationem vitae! In iure reiciendis eligendi repellat perferendis et magnam repudiandae nemo, non voluptatum, esse, officia ex inventore</p>
                </div>
                <div>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className="skills-container">
                                <div>
                                    <img src="/icon _file type html_.svg" alt="" />
                                    <h2>HTMl</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                </div>
                                <div>
                                    <img src="/icon _file type html_.svg" alt="" />
                                    <h2>HTMl</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                </div>
                                <div>
                                    <img src="/icon _file type html_.svg" alt="" />
                                    <h2>HTMl</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                </div>
                                <div>
                                    <img src="/icon _file type html_.svg" alt="" />
                                    <h2>HTMl</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                </div>
                                <div>
                                    <img src="/icon _file type html_.svg" alt="" />
                                    <h2>HTMl</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                </div>
                                <div>
                                    <img src="/icon _file type html_.svg" alt="" />
                                    <h2>HTMl</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
      </div>
    );

  }
  export default Skills;
