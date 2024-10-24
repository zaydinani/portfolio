// api/genres.js
import axios from "axios";

// Use environment variables from the .env file
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;
const SECURITY_CODE = import.meta.env.VITE_REACT_API_TOKEN_ARTICLES; // Make sure to define this in your .env file

// Function to fetch all genres
export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/Blog-genres?populate=*`, {
      headers: {
        Authorization: `Bearer ${SECURITY_CODE}`,
      },
    });
    console.log(`this is the all genres ${response.data}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};

// Function to fetch the genre for a specific article by its ID
export const fetchGenreForArticle = async (articleId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/Blog-genres?filters[article][id][$eq]=${articleId}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${SECURITY_CODE}`,
        },
      }
    );

    // Assuming the genre data is in response.data.data
    console.log("Fetched genre for article:", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching genre for article:", error);
    throw error;
  }
};
