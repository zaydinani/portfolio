import { useNavigate } from "react-router-dom";

function Articles(props) {
  const { id, image, title, date, description, genres } = props; // Use genres instead of tags
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/article/${id}`); // Navigate to the article page with the article ID
  };

  return (
    <div className="article">
      <div className="img">
        {image && <img src={image} alt="article cover" />}{" "}
        {/* Ensure image exists */}
      </div>
      <div className="article-info">
        <a onClick={handleTitleClick} style={{ cursor: "pointer" }}>
          {title}
        </a>{" "}
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
        <div className="reading_time">
          <img src="/icons/clock-countdown.svg" alt="" />
          <p>16 mins reads</p>
        </div>
      </div>
    </div>
  );
}

export default Articles;
