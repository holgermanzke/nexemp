import React from "react";
import { getSearchResults } from "../components/api/getSearchResults";
import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const [results, setResults] = React.useState([]);
  const location = useLocation().search;

  React.useEffect(() => {
    async function refreshResults() {
      const foundResults = await getSearchResults(location);
      console.log(foundResults);
      setResults(foundResults);
    }
    refreshResults();
  }, [location]);
  console.log(location);
  console.log(results);
  return (
    <>
      {results.map(result => {
        return result.first_name;
      })}
      1234
    </>
  );
}
