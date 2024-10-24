function Articles(props) {
  const { image, title, date, description, genres } = props; // Use genres instead of tags
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

          {/* Display genres */}
          <div className="genres">
            {genres &&
              genres.map((genre, index) => (
                <span key={index} className="genre">
                  <img
                    src={`${BASE_URL}${genre.attributes.genre_icon?.data?.attributes?.url}`} // Assuming 'genre_icon' holds the icon info
                    alt={genre.attributes.genre_name} // Use genre name for alt text
                  />
                  {genre.attributes.genre_name} {/* Display the genre name */}
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
