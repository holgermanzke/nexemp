export async function getSumOfSearchResults(query) {
  const response = await fetch(`/api/candidates/sum${query}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return data[0].count;
}
