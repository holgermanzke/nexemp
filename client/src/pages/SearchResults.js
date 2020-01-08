import React from "react";
import { getSearchResults } from "../components/api/getSearchResults";
import { useLocation } from "react-router-dom";
import SingleSearchResult from "../components/searchresults/SingleSearchResult";
import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 75px;
`;

export default function SearchResults() {
  const [results, setResults] = React.useState([]);
  const location = useLocation().search;

  React.useEffect(() => {
    async function refreshResults() {
      const foundResults = await getSearchResults(location);
      setResults(foundResults);
    }
    refreshResults();
  }, [location]);
  return (
    <>
      <Container />
      {results.map(result => {
        return (
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
        );
      })}
    </>
  );
}
