import { Component } from "react";
import Movies from "../components/Movies/Movies";
import Preloader from "../components/Preloader/Preloader";
import Search from "../components/Search/Search";

const API_KEY = import.meta.env.VITE_API_KEY;

export default class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (str, type) => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? (
          <Preloader className="prealoader" />
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    );
  }
}
