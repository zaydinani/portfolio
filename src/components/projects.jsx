import { useNavigate } from 'react-router-dom';
import "../styles/main.scss";

function projects(props) {
    const { image, title, date, description } = props;
    const navigate = useNavigate();
    const handleProjectClick = (name) => {
        navigate(`/project/${name}`);
      }
    return (
        <div className="project">
            <div className="img">
                <img src={image} alt="project logo" />
            </div>
            <div className="project-info">
                <a onClick={() => handleProjectClick(props.name)}>{title}</a>
                <p className="date">{date}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}
export default projects;
