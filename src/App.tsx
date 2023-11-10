import { useEffect, useState } from "react";
import { SearchIcon } from "./Consts/Svgs";
import { MovieList } from "./Components/BookList/MovieList";
import { fetchMovies } from "./Consts/Services";
import { Movie } from "./Consts/Types";
import "./App.css";
import { useDebounce } from "./Hooks/useDebounce";
function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("Hello");
  const debounced = useDebounce(query, 500);
  useEffect(() => {
    fetchMovies((data, err) => {
      if (err) {
        console.log(err);
      }
      setMovies(data);
    }, query);
  }, [debounced]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQ = e.target.value;
    if (
      newQ.length < 1 ||
      newQ == query ||
      newQ.split("").every((el) => el == " ")
    )
      return;
    setQuery(newQ);
  };

  return (
    <>
      <header className="header">
        <div role="searchbox" className="searchBox">
          <input onChange={handleChange} type="text" className="searchInput" />
          <button className="searchButton">
            <SearchIcon />
          </button>
        </div>
      </header>
      <main className="mainPage">
        <MovieList movies={movies} />
      </main>
    </>
  );
}

export default App;
