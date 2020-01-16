import React from "react";
import SingleSearchResult from "../components/SingleSearchResult";
import Pagination from "../components/Pagination";

export default {
  title: "Search Results"
};

export function SingleResult() {
  return (
    <>
      <SingleSearchResult /> <Pagination />
    </>
  );
}

export function PageinationFunction() {
  return <Pagination totalResults={33} />;
}
