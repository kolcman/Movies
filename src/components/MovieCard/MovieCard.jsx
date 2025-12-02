import styles from "./MovieCard.module.css";

export default function MovieCard(props) {
  const { Title, Year, Poster, Type, imdbID } = props;

  return (
    <div id={imdbID} className={`${styles.card}`}>
      {Poster !== "N/A" ? (
        <img className={`${styles.card__img}`} src={Poster} alt="Film poster" />
      ) : (
        <span>Постер отсутствует</span>
      )}
      <div className={`${styles.card__info}`}>
        <h2 className={`${styles.card__title}`}>{`${Title} (${Year})`}</h2>
      </div>
      <span className={`${styles.card__type}`}>{Type}</span>
    </div>
  );
}
