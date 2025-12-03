import MovieCard from "../MovieCard/MovieCard";
import styles from "./Movies.module.css";

export default function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className={`${styles.movies}`}>
      {movies.length ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}
