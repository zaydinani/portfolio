import "../styles/nav.scss"



function Nav() {
    return (
        <nav>
            <ul>
                <li className="selected"><a href="">about</a></li>
                <li><a href="">skills</a></li>
                <li><a href="">projects</a></li>
                <li><a href="">contact</a></li>
                <div>
                    <input type="checkbox" className="checkbox" id="checkbox"/>
                    <label for="checkbox" className="label">
                        <img className="fa-moon" src="../public/moon purple.png"alt=""/>
                        <img className="fa-sun" src="../public/sun-solid.png" alt=""/>
                        <div className="ball"></div> 
                    </label>
                </div>
            </ul>
        </nav>
    )
}
export default Nav
