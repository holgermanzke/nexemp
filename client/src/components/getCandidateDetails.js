export async function getCandidateDetails(candId) {
  const response = await fetch(`/candidates/1793`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return data;
}
