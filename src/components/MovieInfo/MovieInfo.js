import React from "react";
import css from "./detail.module.css";
import moment from "moment";
import noImage from "../../assets/img/no-image.png";

const MovieInfo = (props) => {
  let percent = props.currentMovie.vote_average;
  let halfstars = (percent * 100) / 10;
  return (
    <div>
      <nav></nav>
      <main className={css.detailMovie}>
        <header className={css.titleMovie}>
          {props.currentMovie.title}
          <div className={css.dateMovie}>
            {" "}
            {props.currentMovie.release_date === ""
              ? "Sem data"
              : moment(props.currentMovie.release_date).format("DD/MM/YYYY")}
          </div>
        </header>
        <section>
          <article>
            <div className={css.titleLine}>Sinopse</div>
            <hr />
            <p className={css.content}>{props.currentMovie.overview}</p>

            <div className={css.titleLine}>Informações</div>
            <hr />
            <div className={css.divInfo}>
              <div className={css.titleInfo}>
                Situação
                <span>Lançado</span>
              </div>
              <div className={css.titleInfo}>
                Idioma
                <span>Inglês</span>
              </div>
              <div className={css.titleInfo}>
                Duração
                <span>2h</span>
              </div>
              <div className={css.titleInfo}>
                Orçamento
                <span>$180.000.000,00</span>
              </div>
              <div className={css.titleInfo}>
                Receita
                <span>$850.877.000,00</span>
              </div>
              <div className={css.titleInfo}>
                Lucro
                <span>$670.000.000,00</span>
              </div>
            </div>
            <div className={css.divGenre}>
              <span className={css.genre}>Ação</span>
              <span className={css.genre}>Aventura</span>
              <span className={css.genre}>Fantasia</span>
            </div>
            <span className={css.percentage}>{halfstars.toFixed()}%</span>
          </article>
          <figure>
            {props.currentMovie.poster_path == null ? (
              <img
                src={noImage}
                alt="Sem Imagem"
                style={{ border: "2px solid #ccc" }}
              />
            ) : (
              <img
                src={`http://image.tmdb.org/t/p/w500/${props.currentMovie.poster_path}`}
                alt={props.currentMovie.title}
              />
            )}
          </figure>
        </section>
      </main>
    </div>
  );
};

export default MovieInfo;
