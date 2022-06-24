export const API_KEY = "1d5bcefbaca3753a8ad2857592e6098b";

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetch2022TeluguMovies:`/discover/movie?api_key=${API_KEY}&with_original_language=te&year=2022`,
  fetch2022TamilMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=ta&year=2022`
};