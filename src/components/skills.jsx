import "../styles/skills.scss";
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
                    <div className="info">
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
                                        <img src="/icon _file type css_.svg" alt="" />
                                        <h2>CSS</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                    </div>
                                    <div>
                                        <img src="/icon _file type js official_.svg" alt="" />
                                        <h2>JavaScript</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                    </div>
                                    <div>
                                        <img src="/icon _file type reactjs_.svg" alt="" />
                                        <h2>React</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                    </div>
                                    <div>
                                        <img src="/icon _file type node_.svg" alt="" />
                                        <h2>NodeJs</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                    </div>
                                    <div>
                                        <img src="/icons8-express-js.svg" alt="" />
                                        <h2>ExpressJS</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="skills-container">
                                    <div>
                                        <img src="/iconmonstr-github-1.svg" alt="" />
                                        <h2>GitHub</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                    </div>
                                    <div>
                                        <img src="/icon _file type git_.svg" alt="" />
                                        <h2>GIT</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                    </div>
                                    <div>
                                        <img src="/bootstrap-4.svg" alt="" />
                                        <h2>BootStrap</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                    </div>
                                    <div>
                                        <img src="/icons8-sass-avatar.svg" alt="" />
                                        <h2>SASS</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                    </div>
                                    <div>
                                        <img src="/mysql.svg" alt="" />
                                        <h2>MySQL</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                    </div>
                                    <div>
                                        <img src="/php-icon.svg" alt="" />
                                        <h2>PHP</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque, illum tenetur perspiciatis voluptas reiciendis </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Skills;
