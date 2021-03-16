import React from "react";
import "./pages.css";

const Pagination = (props) => {
  const pageLinks = [];

  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.currentPage === i ? "active" : "";

    pageLinks.push(
      <li className={active} key={i} onClick={() => props.nextPage(i)}>
        <a href="#">{i}</a>
      </li>
    );
  }

  return (
    <div className="pageContainer">
      <div className="pageRow">
        <ul className="pagination">{pageLinks}</ul>
      </div>
    </div>
  );
};

export default Pagination;
