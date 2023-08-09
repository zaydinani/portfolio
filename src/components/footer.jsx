
import "../styles/footer.scss";
import Socials from "./socialIcons";

function footer() {
    return (
        <footer>
            <div className="copyright">
                <img src="./logo.png" alt="" />
                <p>&copy; zayd inani 2023</p>
            </div>
            <Socials />
        </footer>
    );
}
export default footer;
