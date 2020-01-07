export async function getSearchResults(query) {
  const response = await fetch(`api/searchresults${query}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return data;
}
