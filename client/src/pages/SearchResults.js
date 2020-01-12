import React from "react";
import { getSearchResults } from "../api/getSearchResults";
import { useLocation } from "react-router-dom";
import SingleSearchResult from "../components/SingleSearchResult";
import styled from "@emotion/styled";
import Pagination from "../components/Pagination";

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
          <>
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
              {console.log("INFO", results.length)}
            </div>
          </>
        );
      })}
      {results.length > 10 ? <Pagination page="1" /> : <Pagination page="2" />}
    </>
  );
}
