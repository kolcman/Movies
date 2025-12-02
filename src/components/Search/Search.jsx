import { Component } from "react";
import styles from "./Search.module.css";

export default class Search extends Component {
  state = {
    search: "",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
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
          onClick={() => this.props.searchMovies(this.state.search)}
        >
          Search
        </button>
      </div>
    );
  }
}
