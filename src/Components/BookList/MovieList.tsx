import { Movie } from "../../Consts/Types";
import MovieCard from "./Movie";
interface Props {
  movies: Movie[];
}
export const MovieList = ({ movies }: Props) => {
  return (
    <section className="movieList">
      {movies.map((movie) => (
        <MovieCard
          Poster={movie.Poster}
          Title={movie.Title}
          Type={movie.Type}
          Year={movie.Year}
          imdbID={movie.imdbID}
          key={movie.imdbID}
        />
      ))}
    </section>
  );
};
