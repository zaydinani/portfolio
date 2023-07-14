import "../styles/main.scss";

function projects(props) {
    const { title, date, description } = props;

    return (
        <div className="project">
        <div className="img"></div>
        <div className="project-info">
            <h1>{title}</h1>
            <p className="date">{date}</p>
            <p>{description}</p>
        </div>
    </div>
    );
}
export default projects;
