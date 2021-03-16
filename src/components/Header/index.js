import React from "react";
import css from "./header.module.css";

const Header = (props) => {
  return (
    <div>
      <header
        onClick={props.closeMovieInfo}
        style={{ cursor: "pointer" }}
        className={css.titleHeader}
      >
        Movies
      </header>
    </div>
  );
};

export default Header;
