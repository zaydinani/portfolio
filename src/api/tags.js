// api/tags.js
import axios from "axios";

// Use environment variables from the .env file
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;
const SECURITY_CODE = import.meta.env.VITE_REACT_API_TOKEN_ARTICLES; // Make sure to define this in your .env file

// Function to fetch all tags
export const fetchTags = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/Blog-tags?populate=*`, {
      headers: {
        Authorization: `Bearer ${SECURITY_CODE}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching tags:", error);
    throw error;
  }
};
