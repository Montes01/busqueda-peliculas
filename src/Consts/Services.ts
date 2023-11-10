import { API_KEY, BASE_URL } from "./Consts";
import { Movie } from "./Types";
export const fetchMovies = (
  callback: (data: Movie[], err?: any) => void,
  query: string = "Hello"
) => {
  fetch(`${BASE_URL}?apiKey=${API_KEY}&&s=${query}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data.Response != "True") {
        console.error(data.Error);
        return;
      }
      callback(data.Search);
    })
    .catch((error) => {
      callback([], error);
    });
};
