import React from "react";
import css from "./movies.module.css";
import moment from "moment";
import noImage from "../../assets/img/no-image.png";

const Movie = (props) => {
  const { title, overview, image, date, average } = props;
  let percent = average;
  let halfstars = (percent * 100) / 10;
  return (
    <div
      className={css.movieCursor}
      onClick={() => props.viewMovieInfo(props.movieId)}
    >
      <figure className={css.mobileCard}>
        {image == null ? (
          <img
            src={noImage}
            alt="Sem Imagem"
            style={{ border: "2px solid #ccc" }}
          />
        ) : (
          <img src={`http://image.tmdb.org/t/p/w500/${image}`} alt={title} />
        )}
      </figure>
      <section className={css.cardMovie}>
        <figure className={css.desktopCard}>
          {image == null ? (
            <img
              src={noImage}
              alt="Sem Imagem"
              style={{ border: "2px solid #ccc" }}
            />
          ) : (
            <img src={`http://image.tmdb.org/t/p/w500/${image}`} alt={title} />
          )}
        </figure>
        <article>
          <header className={css.titleMovie}>
            <span className={css.percentage}>{halfstars.toFixed()}%</span>
            {title}
          </header>
          <div className={css.dateMovie}>
            {date === "" ? "Sem data" : moment(date).format("DD/MM/YYYY")}
          </div>
          <p className={css.content}>{overview}</p>
          <div className={css.divGenre}>
            <span className={css.genre}>Ação</span>
            <span className={css.genre}>Aventura</span>
            <span className={css.genre}>Fantasia</span>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Movie;
