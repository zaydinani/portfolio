function Articles(props) {
  const { image, title, date, description, tags } = props; // Accept tags as a prop
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  return (
    <div className="article">
      <div className="img">
        {image && <img src={image} alt="article cover" />}{" "}
        {/* Ensure image exists */}
      </div>
      <div className="article-info">
        <a>{title}</a>
        <div className="metadata">
          <p className="date">{date}</p>
          <div className="tag">
            {tags &&
              tags.map((tag, index) => (
                <span key={index} className="tag">
                  <img
                    src={`${BASE_URL}${tag.attributes.tag_icon.data?.attributes.url}`}
                    alt={title}
                  />
                  {tag.attributes.tag_name} {/* Display the tag name */}
                </span>
              ))}
          </div>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default Articles;
