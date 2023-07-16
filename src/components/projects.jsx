import "../styles/main.scss";

function projects(props) {
    const { title, date, description } = props;

    return (
        <div className="project">
        <div className="img">
            <img src="/nav-logo.png" alt="" />
        </div>
        <div className="project-info">
            <a>{title}</a>
            <p className="date">{date}</p>
            <p>{description}</p>
        </div>
    </div>
    );
}
export default projects;
