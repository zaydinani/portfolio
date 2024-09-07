import "../styles/blogPage.scss";
import Articles from "../components/articles";
import Tag from "../components/tag";
import LatestArticle from "../components/latestArticle";
import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../dotloading.json";
import { fetchArticles } from "../api/articles";
import { fetchJoke } from "../api/jokes";
import { fetchTags } from "../api/tags"; // Import the fetchTags function

const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [latestArticle, setLatestArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [joke, setJoke] = useState("");
  const [tags, setTags] = useState([]); // State for tags

  useEffect(() => {
    const getArticlesJokesAndTags = async () => {
      try {
        // Fetch joke
        const fetchedJoke = await fetchJoke();
        setJoke(fetchedJoke);

        // Fetch articles
        const articlesData = await fetchArticles();
        if (articlesData && articlesData.data.length > 0) {
          const sortedArticles = articlesData.data.sort(
            (a, b) =>
              new Date(b.attributes.createdAt) -
              new Date(a.attributes.createdAt)
          );
          setArticles(sortedArticles);
          setLatestArticle(sortedArticles[0]);
        }

        // Fetch tags
        const tagsData = await fetchTags();
        setTags(tagsData.data); // Assuming data.data contains the tags array
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    };

    getArticlesJokesAndTags();
  }, []);

  return (
    <main>
      {loading ? (
        <div className="loading-container">
          <Player
            autoplay
            loop
            src={loadingAnimation}
            style={{ height: "200px", width: "200px" }}
          />
          <div className="joke-container">
            <h3>{joke ? joke : "Loading a joke for you..."}</h3>
          </div>
        </div>
      ) : (
        <>
          <div className="hero_container">
            <div className="hero">
              <div className="page_info">
                <h1>Articles</h1>
                <p>
                  I like to blog about stuff like productivity, business,
                  YouTube, and other stuff I'm interested in. Hopefully you'll
                  find some of it interesting too.
                </p>
              </div>

              <div className="latest_articles">
                {latestArticle && (
                  <LatestArticle
                    name={latestArticle.attributes.article_title}
                    image={`${BASE_URL}${latestArticle.attributes.article_cover_image?.data?.attributes?.url}`}
                    title={latestArticle.attributes.article_title}
                    date={new Date(
                      latestArticle.attributes.createdAt
                    ).toLocaleDateString()}
                    description={latestArticle.attributes.article_excerpt}
                    tags={latestArticle.attributes.blog_tags?.data}
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
                {tags.map((tag) => (
                  <Tag
                    key={tag.id}
                    title={tag.attributes.tag_name}
                    icon={`${BASE_URL}${tag.attributes.tag_icon.data?.attributes.url}`}
                  />
                ))}
              </div>
            </div>

            <div className="articles_container">
              <h1>All Articles</h1>
              {articles.map((article, index) => (
                <Articles
                  key={index}
                  title={article.attributes.article_title}
                  image={`${BASE_URL}${article.attributes.article_cover_image?.data?.attributes?.url}`}
                  date={new Date(
                    article.attributes.createdAt
                  ).toLocaleDateString()}
                  description={article.attributes.article_excerpt}
                  tags={article.attributes.blog_tags?.data}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default BlogPage;
