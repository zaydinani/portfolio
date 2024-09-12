// jokes.js (or jokesApi.js)

export const fetchJoke = async () => {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming,Dark,Pun?blacklistFlags=religious&amount=5"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch jokes");
    }
    const data = await response.json();
    console.log("Fetched jokes from API:", data); // Debugging log
    return data; // Ensure the returned structure matches what you're expecting
  } catch (error) {
    console.error("Error fetching joke:", error);
    return null; // Safely return null in case of error
  }
};
