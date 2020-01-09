export async function getCandidateDetails(candId) {
  console.log("candId", candId);
  const response = await fetch(`/api/candidates/${candId}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return data;
}
