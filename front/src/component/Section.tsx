import React from "react";
import BooksList from "./sectionBookList/BooksList";
import FilterBook from "./sectionFilterBook/FilterBook";
import "./style.css";

function Section() {
  return (
    <section className="section__book">
      <FilterBook />
      <BooksList />
    </section>
  );
}

export default Section;
