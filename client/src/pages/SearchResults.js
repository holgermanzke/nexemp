import React from "react";
import { getSearchResults } from "../api/getSearchResults";
import { useLocation } from "react-router-dom";
import SingleSearchResult from "../components/SingleSearchResult";
import styled from "@emotion/styled";
import Pagination from "../components/Pagination";
import NoResults from "../components/NoResults";
import Preloader from "../components/Preloader";
import { getSumOfSearchResults } from "../api/getSumOfSearchResults";

const Container = styled.div`
  margin-top: 75px;
`;

export default function SearchResults() {
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [totalResults, setTotalResults] = React.useState([]);
  const maxTotalResults = Math.min(totalResults, 150);
  const location = useLocation().search;

  React.useEffect(() => {
    async function refreshResults() {
      const foundResults = await getSearchResults(location);
      setResults(foundResults);
      const foundTotalResults = await getSumOfSearchResults(location);
      setTotalResults(foundTotalResults);
      setLoading(false);
    }
    refreshResults();
  }, [location, totalResults]);
  return (
    <>
      <Container />
      {loading && <Preloader />}
      {!loading &&
        results.map(result => (
          <div key={result.id}>
            <SingleSearchResult
              profession={result.which_job}
              experience={5}
              skill1={result.position_or_graduation}
              skill2={result.first_activity}
              location={result.town}
              age="34"
              profileURL={`../profile/${result.id}`}
            />
          </div>
        ))}
      {results.length < 1 && <NoResults />}
      <Pagination totalResults={maxTotalResults} />
    </>
  );
}
