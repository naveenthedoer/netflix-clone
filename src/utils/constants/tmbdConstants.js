export const TMDB_BASE_API_PATH = "https://api.themoviedb.org/3/movie/";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_AUTH_TOKEN}`,
  },
};

export const TMDB_IMG_CDN_BASE_PATH = "https://image.tmdb.org/t/p/w780";
