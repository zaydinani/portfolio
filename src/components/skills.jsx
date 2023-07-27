import "../styles/main.scss";

function skills(props) {
    const { icon, title, description } = props;

    return (
        <div className="skill">
            <img src={icon} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
export default skills;
