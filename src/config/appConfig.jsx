export const URL = "http://localhost:8000/Netflix-API";

export const endpoints = {
  addMovie: `${URL}/addMovie`,
  getAllMovies: `${URL}/allMovies`,
  getMovieById: (id) => `${URL}/getMovieById/${id}`,
};
