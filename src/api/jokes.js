// jokes.js (or jokesApi.js)

export const fetchJoke = async () => {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming,Dark,Pun,Spooky?blacklistFlags=religious"
    );
    const jokeData = await response.json();

    if (jokeData.type === "single") {
      return jokeData.joke; // Return the single joke
    } else if (jokeData.type === "twopart") {
      return `${jokeData.setup} - ${jokeData.delivery}`; // Return two-part joke
    }
  } catch (error) {
    console.error("Error fetching joke:", error);
    return "Couldn't fetch a joke at the moment!"; // Return a fallback message
  }
};
