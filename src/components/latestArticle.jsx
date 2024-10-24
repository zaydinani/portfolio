function LatestArticle(props) {
  const { image, title, date, description, genres } = props; // Replace 'tags' with 'genres'
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  return (
    <div className="latest_article_comp">
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

          {/* Displaying genres instead of tags */}
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

        {/* Description */}
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default LatestArticle;
