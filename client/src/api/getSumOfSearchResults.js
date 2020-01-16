export async function getSumOfSearchResults(query) {
  const response = await fetch(`/api/candidates${query}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  console.log(data);
  return data;
}
