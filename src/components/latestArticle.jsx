function LatestArticle(props) {
  const { image, title, date, description, tags } = props;
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  return (
    <div className="latest_article">
      {/* Image */}
      <div className="img">
        <img src={image} alt={title} />
      </div>
      <div className="latest_article_info">
        {/* Title */}
        <a>{title}</a>

        {/* Metadata */}
        <div className="latest_metadata">
          <p className="date">{date}</p>

          {/* Displaying tags */}
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

        {/* Description */}
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default LatestArticle;
