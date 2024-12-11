const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { fetchArticleById } from "../api/article"; // Import the API function
import "../styles/articleContent.scss";

function ArticleContent() {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null); // State to store the article data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  useEffect(() => {
    // Fetch the article when the component mounts
    const getArticle = async () => {
      try {
        const data = await fetchArticleById(id);
        setArticle(data);
      } catch (err) {
        setError("Failed to fetch the article.");
      } finally {
        setLoading(false);
      }
    };

    getArticle();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  const genres = article?.attributes?.blog_genres?.data || [];
  const tags = article?.attributes?.blog_tags?.data || [];

  // Render the article content
  return (
    <main>
      <div className="article_container">
        <div className="article_img">
          <img
            src={`${BASE_URL}${article.attributes.article_cover_image?.data?.attributes?.url}`}
            alt={article.attributes.title}
          />
        </div>
        <div className="title">
          <h1>{article.attributes.article_title}</h1>
          <div className="metadata">
            <p className="author">
              by {article.attributes.article_author || "Unknown Author"}
            </p>
            <p className="date">
              {new Date(article.attributes.publishedAt).toLocaleDateString()}
            </p>
            <p className="type">
              {genres.length > 0
                ? genres.map((genre) => genre.attributes.genre_name).join(", ")
                : "No genres available"}
            </p>
            <p className="type">
              {tags.length > 0
                ? tags.map((tag) => tag.attributes.tag_name).join(", ")
                : "No tags available"}
            </p>
          </div>
        </div>
        <article>
          <BlocksRenderer content={article?.attributes?.article_content} />{" "}
        </article>
      </div>
    </main>
  );
}

export default ArticleContent;
