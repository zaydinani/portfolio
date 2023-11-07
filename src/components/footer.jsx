
import "../styles/footer.scss";
import Socials from "./socialIcons";
import data from "../data/data.json"

function footer() {
    return (
        <footer>
            <div className="copyright">
                <img src={data['zayd-data'].about.logo} alt="" />
                <p>&copy; zayd inani 2023</p>
            </div>
            <Socials />
        </footer>
    );
}
export default footer;
