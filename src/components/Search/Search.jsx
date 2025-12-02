import { Component } from "react";
import styles from "./Search.module.css";

export default class Search extends Component {
  state = {
    search: "",
    type: "",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <>
        <div className={`${styles.search}`}>
          <div className={`"input-field" ${styles.search__input}`}>
            <input
              className="validate"
              id="email_inline"
              type="search"
              placeholder="Search"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
          </div>
          <button
            className={`${styles.search__btn}`}
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
        <div className={`${styles.radio__group}`}>
          <label className={`${styles.radio__label}`}>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>

          <label className={`${styles.radio__label}`}>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies</span>
          </label>

          <label className={`${styles.radio__label}`}>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            <span>Series</span>
          </label>

          <label className={`${styles.radio__label}`}>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="game"
              onChange={this.handleFilter}
              checked={this.state.type === "game"}
            />
            <span>Games</span>
          </label>
        </div>
      </>
    );
  }
}
