import "../styles/about.scss"


function About() {
    return (
        <div className="section">
            <div className="about container">
                <div className="info">
                    <div>
                        <h1>about</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta ex autem voluptate fugiat fugit enim. Dicta saepe asperiores quod totam ratione doloribus sint placeat officia, iure nihil soluta inventore!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta ex autem voluptate fugiat fugit enim. Dicta saepe asperiores quod totam ratione doloribus sint placeat officia, iure nihil soluta inventore!</p>

                    </div>
                    <div>
                        <a href=""><img src="/icon _facebook squared_.svg" alt="" /></a>
                        <a href=""><img src="/icon _instagram_.svg" alt="" /></a>
                        <a href=""><img src="/icon _linkedin_.svg" alt="" /></a>
                        <a href=""><img src="/icon _github outline_.svg" alt="" /></a>
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
