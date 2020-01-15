import React from "react";
import { getSearchResults } from "../api/getSearchResults";
import { useLocation } from "react-router-dom";
import SingleSearchResult from "../components/SingleSearchResult";
import styled from "@emotion/styled";
import NoResults from "../components/NoResults";
import Preloader from "../components/Preloader";

const Container = styled.div`
  margin-top: 75px;
`;

export default function SearchResults() {
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const location = useLocation().search;

  React.useEffect(() => {
    async function refreshResults() {
      const foundResults = await getSearchResults(location);
      setResults(foundResults);
      setLoading(false);
    }
    refreshResults();
  }, [location]);
  return (
    <>
      {results.length < 1 && <NoResults />}
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
    </>
  );
}
