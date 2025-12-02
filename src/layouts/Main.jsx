import { Component } from "react";
import Movies from "../components/Movies/Movies";
import Preloader from "../components/Preloader/Preloader";
import Search from "../components/Search/Search";

export default class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=e4adf7db&s=matrix")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str, type) => {
    fetch(
      `http://www.omdbapi.com/?apikey=e4adf7db&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <Preloader className="prealoader" />
        )}
      </main>
    );
  }
}
