import axios from "axios";

// Use environment variables from the .env file
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;
const SECURITY_CODE = import.meta.env.VITE_REACT_API_TOKEN_ARTICLES;

// Function to fetch all blog articles
export const fetchArticles = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/blog-articles?populate[article_cover_image]=*&populate[blog_tags][populate]=tag_icon`,
      {
        headers: {
          Authorization: `Bearer ${SECURITY_CODE}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
