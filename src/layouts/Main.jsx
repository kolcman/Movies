import { useEffect, useState } from "react";
import Movies from "../components/Movies/Movies";
import Preloader from "../components/Preloader/Preloader";
import Search from "../components/Search/Search";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type) => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? (
        <Preloader className="prealoader" />
      ) : (
        <Movies movies={movies} />
      )}
    </main>
  );
}
