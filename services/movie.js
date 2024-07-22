const API_URL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2VjZWRiYWI2YWNjNWRiOGM0MTgwNGNmZTg0OTllYyIsIm5iZiI6MTcyMTYxMzIyMi45OTc4MTIsInN1YiI6IjY2OWRiODY3MTQ0ZmYwNGJiMjRjNDY0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qC80vggX1cNbGqi6I2ZIbTrFvLh-OC-dmjlHmsa9vu8",
  },
};

const fetchMovieApi = async (pathname, query = "") => {
  try {
    const response = await fetch(`${API_URL}${pathname}?${query}`, options);
    
    return response.json();
  } catch (error) {
    throw new Error(error)
  }
};

const getSingleCategory = async (genreId) => {
  return fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
};

const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list", `&page=1`);
};

const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated", `&page=1`);
};

const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular", `&page=1`);
};

const getMovie = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`);
};

export {
  fetchMovieApi,
  getSingleCategory,
  getCategories,
  getTopRatedMovies,
  getPopularMovies,
  getMovie,
};
