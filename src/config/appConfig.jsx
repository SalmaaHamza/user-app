export const URL = "http://localhost:8000/Netflix-API";

export const endpoints = {
  addMovie: `${URL}/addMovie`,
  getAllMovies: `${URL}/allMovies`,
  getMovieById: (id) => `${URL}/getMovieById/${id}`,
  getAllLists: (type = null) => `${URL}/list${type ? "?type=" + type :'?'}`,
  signIn:(email, password )=>`${URL}/signIn/${email,password}`,
  addUser:`${URL}/addUser/`,
};
