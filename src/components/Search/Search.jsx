import { useState } from "react";
import styles from "./Search.module.css";

export default function Search(props) {
  const { searchMovies = Function.prototype } = props;
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <>
      <div className={`${styles.search}`}>
        <div className={`"input-field" ${styles.search__input}`}>
          <input
            className="validate"
            id="email_inline"
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
        </div>
        <button
          className={`${styles.search__btn}`}
          onClick={() => searchMovies(search, type)}
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
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </label>

        <label className={`${styles.radio__label}`}>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies</span>
        </label>

        <label className={`${styles.radio__label}`}>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span>Series</span>
        </label>

        <label className={`${styles.radio__label}`}>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="game"
            onChange={handleFilter}
            checked={type === "game"}
          />
          <span>Games</span>
        </label>
      </div>
    </>
  );
}
