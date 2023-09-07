import "../styles/main.scss";

function skills(props) {
    const { icon, title, description } = props;

    return (
        <div className="skill">
            <img src={icon} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
export default skills;
