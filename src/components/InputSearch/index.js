import React from "react";
import css from "./input.module.css";

const InputSearch = (props) => {
  return (
    <nav>
      <form onSubmit={props.handleSubmit}>
        <input
          className={css.inputSearch}
          type="text"
          name="search"
          placeholder="Busque um filme por nome, ano ou gênero..."
          onChange={props.handleChange}
        />
      </form>
    </nav>
  );
};

export default InputSearch;
