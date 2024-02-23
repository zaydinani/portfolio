
function Articles(props) {
    const { image, title, date, description } = props;

    return (
        <div className="article">
            <div className="img">
                <img src={image} alt="article logo" />
            </div>
            <div className="article-info">
                <a>{title}</a>
                <div className="metadata">
                    <p className="date">{date}</p>
                    <div className="tag">
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5494 9.85879L12.7044 10.9444L19.478 4.57733L18.323 3.4917L11.5494 9.85879ZM2.4972 19.4535H3.65214L10.9252 12.6169L9.77021 11.5313L2.4972 18.3678V19.4535ZM13.5784 13.4385L8.8962 9.03723L14.109 4.13721L13.2038 3.2863L6.36782 9.71209L4.6198 8.06896L13.2038 6.10352e-05L15.8571 2.49409L18.323 0.17611L23.0052 4.57733L13.5784 13.4385ZM4.68222 21.8008H3.05176e-05V17.3995L8.8962 9.03723L13.5784 13.4385L4.68222 21.8008Z" fill="#5552FF"/>
                        </svg>
                        <p>writing</p>
                    </div>
                </div>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}
export default Articles;
