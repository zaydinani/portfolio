import "../styles/nav.scss"



function Nav() {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    };
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setLightMode()
        else setDarkMode();
    }
    return (
        <nav>
            <ul>
                <li className="selected"><a href="">about</a></li>
                <li><a href="">skills</a></li>
                <li><a href="">projects</a></li>
                <li><a href="">contact</a></li>
                <div>
                    <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleTheme}/>
                    <label for="checkbox" className="label">
                        <img className="fa-moon" src="/moon purple.png"alt=""/>
                        <img className="fa-sun" src="/sun-solid.png" alt=""/>
                        <div className="ball"></div> 
                    </label>
                </div>
            </ul>
        </nav>
    )
}
export default Nav
