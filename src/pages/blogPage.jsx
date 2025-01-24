import "../styles/blogPage.scss";
import Articles from "../components/articles";
import Genre from "../components/genre";
import LatestArticle from "../components/latestArticle";
import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../dotloading.json";
import { fetchArticles } from "../api/articles";
import { fetchJoke } from "../api/jokes";
import { fetchTags } from "../api/tags"; // Import the fetchTags function
import { fetchGenres } from "../api/genres"; // Use fetchGenres to get genres instead of tags

const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [latestArticle, setLatestArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jokes, setJokes] = useState([]); // Store an array of jokes
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0); // Track the current joke to display
  const [tags, setTags] = useState([]);
  const [genres, setGenres] = useState([]); // Replace tags with genres

  useEffect(() => {
    const getArticlesJokesAndGenres = async () => {
      try {
        // Fetch jokes
        const fetchedJokes = await fetchJoke();
        if (
          fetchedJokes &&
          fetchedJokes.jokes &&
          Array.isArray(fetchedJokes.jokes)
        ) {
          setJokes(fetchedJokes.jokes);
        }

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

        // Fetch genres instead of tags
        const genresData = await fetchGenres();
        if (genresData && genresData.data) {
          setGenres(genresData.data); // Assuming data.data contains the genres array
        } else {
          console.error("Genres data is missing or in an unexpected format.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    };

    getArticlesJokesAndGenres();
  }, []);

  // Add another useEffect to handle switching the jokes every 3 seconds
  useEffect(() => {
    // If there are jokes and we are still loading, switch the joke every 3 seconds
    if (loading && jokes.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % jokes.length); // Cycle through jokes
      }, 5000); // Switch joke every 3 seconds

      // Clean up interval when loading finishes or the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [loading, jokes]); // Runs when loading or jokes change

  // Function to render a joke based on its type (single or twopart)
  const renderJoke = (joke) => {
    if (joke.type === "single") {
      return (
        <>
          <h3 className="apology">
            sorry for the slow loading enjoy some jokes though
          </h3>
          <h4>{joke.joke}</h4>
        </>
      );
    } else if (joke.type === "twopart") {
      return (
        <>
          <h3 className="apology">
            sorry for the slow loading enjoy some jokes though
          </h3>
          <h4>{joke.setup}</h4>
          <h4>{joke.delivery}</h4>
        </>
      );
    }
  };

  return (
    <main>
      {loading ? (
        <div className="loading-container">
          <Player
            autoplay
            loop
            src={loadingAnimation}
            style={{ height: "100px", width: "100px", marginBottom: "1.5rem" }}
          />
          <div className="joke-container">
            {jokes.length > 0 ? (
              renderJoke(jokes[currentJokeIndex]) // Display the current joke
            ) : (
              <h3>Loading a joke for you...</h3>
            )}
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
                <div className="latest_article">
                  {latestArticle && (
                    <LatestArticle
                      id={latestArticle.id}
                      articleId={latestArticle.id} // Pass articleId if needed
                      name={latestArticle.attributes.article_title}
                      image={`${BASE_URL}${latestArticle.attributes.article_cover_image?.data?.attributes?.url}`}
                      title={latestArticle.attributes.article_title}
                      date={new Date(
                        latestArticle.attributes.createdAt
                      ).toLocaleDateString()}
                      description={latestArticle.attributes.article_excerpt}
                      // Pass the genres for the latest article
                      genres={latestArticle.attributes.blog_genres?.data || []} // Pass genres array or empty array if no genres
                    />
                  )}
                </div>
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
              <div className="genres">
                {genres.map((genre) => (
                  <Genre
                    key={genre.id}
                    title={genre.attributes.genre_name} // Assuming 'genre_name' is the field for genre name
                    icon={`${BASE_URL}${genre.attributes.genre_icon?.data?.attributes?.url}`} // Assuming 'genre_icon' holds the image info
                  />
                ))}
              </div>
            </div>

            <div className="articles_container">
              <h1>All Articles</h1>
              <div className="article_new">
                {articles.map((article, index) => (
                  <Articles
                    id={article.id}
                    key={index}
                    title={article.attributes.article_title}
                    image={`${BASE_URL}${article.attributes.article_cover_image?.data?.attributes?.url}`}
                    date={new Date(
                      article.attributes.createdAt
                    ).toLocaleDateString()}
                    description={article.attributes.article_excerpt}
                    tags={article.attributes.blog_tags?.data}
                    genres={article.attributes.blog_genres?.data || []} // Pass genres array or empty array if no genres
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default BlogPage;
