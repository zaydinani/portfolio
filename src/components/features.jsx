import "../styles/main.scss";

function features(props) {
    const { image, title, description } = props;

    return (
        <div className="feature">
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}
export default features;
