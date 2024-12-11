import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;
const SECURITY_CODE = import.meta.env.VITE_REACT_API_TOKEN_ARTICLES;

// Function to fetch a single article by ID
export const fetchArticleById = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/blog-articles/${id}?populate=*`, // Populate all fields
      {
        headers: {
          Authorization: `Bearer ${SECURITY_CODE}`,
        },
      }
    );
    console.log(response.data.data);
    return response.data.data; // Return the article data
  } catch (error) {
    console.error("Error fetching article by ID:", error);
    throw error;
  }
};
