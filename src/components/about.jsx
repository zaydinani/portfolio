import "../styles/about.scss"
import Socials from "./socialIcons";

function About() {

    
    return (
        <div className="section">
            <div className="about container"  >
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
        </div>
    )
}
export default About
