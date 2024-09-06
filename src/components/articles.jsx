function Articles(props) {
  const { image, title, date, description, tags } = props; // Accept tags as a prop

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
            {/* Display tags */}
            {tags &&
              tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag.attributes.tag_name}
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
