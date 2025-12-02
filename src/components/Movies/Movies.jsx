import MovieCard from "../MovieCard/MovieCard";
import styles from "./Movies.module.css";

export default function Movies(props) {
  const { movies } = props;

  return (
    <div className={`${styles.movies}`}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
