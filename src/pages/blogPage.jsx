//my styles
import "../styles/blogPage.scss";
import Articles from "../components/articles";
import Tag from "../components/tag";
import LatestArticle from "../components/latestArticle";
import React, { useState, useEffect } from "react";
import { fetchArticles } from "../api/articles"; // Import the fetchArticles function
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [latestArticle, setLatestArticle] = useState(null);

  // Fetch articles when the component mounts
  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();

        if (data && data.data.length > 0) {
          const sortedArticles = data.data.sort(
            (a, b) =>
              new Date(b.attributes.createdAt) -
              new Date(a.attributes.createdAt)
          );
          setArticles(sortedArticles); // Store all articles
          setLatestArticle(sortedArticles[0]); // Set the latest article
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    getArticles();
  }, []);
  return (
    <main>
      <div className="hero_container">
        <div className="hero">
          <div className="page_info">
            <h1>Articles</h1>
            <p>
              I like to blog about stuff like productivity, business, YouTube,
              and other stuff I'm interested in. Hopefully you'll find some of
              it interesting too.
            </p>
          </div>
          <div className="latest_articles">
            {/* Display the latest article */}
            {latestArticle && (
              <LatestArticle
                name={latestArticle.attributes.article_title}
                image={`${BASE_URL}${latestArticle.attributes.article_cover_image?.data?.attributes?.url}`} // Add the base URL
                title={latestArticle.attributes.article_title}
                date={new Date(
                  latestArticle.attributes.createdAt
                ).toLocaleDateString()}
                description={latestArticle.attributes.article_excerpt}
                tags={latestArticle.attributes.blog_tags?.data} // Pass the tags array
              />
            )}
          </div>
        </div>
      </div>
      <div className="articles_section">
        <div className="search_section">
          <h1>browse topics</h1>
          <form action="">
            <input
              name="search"
              type="text"
              placeholder="search anything you want"
              required
            />
            <button>search</button>
          </form>
          <div className="tags">
            <Tag title="writing" />
            <Tag title="writing" />
            <Tag title="writing" />
            <Tag title="writing" />
            <Tag title="writing" />
          </div>
        </div>
        <div className="articles_container">
          <h1>All Articles</h1>
          {/* Display all articles */}
          {articles.map((article, index) => (
            <Articles
              key={index}
              title={article.attributes.article_title}
              image={`${BASE_URL}${article.attributes.article_cover_image?.data?.attributes?.url}`} // Ensure you prepend the base URL
              date={new Date(article.attributes.createdAt).toLocaleDateString()}
              description={article.attributes.article_excerpt}
              tags={article.attributes.blog_tags?.data} // Pass the tags array to the Articles component
            />
          ))}
        </div>
      </div>
    </main>
  );
}
export default BlogPage;
