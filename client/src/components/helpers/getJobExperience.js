export function getJobExperience(fromDateString, dueDateString) {
  let fromDate = new Date(fromDateString);
  let dueDate = new Date(dueDateString);
  let year = 1000 * 60 * 60 * 24 * 365;
  let result = (dueDate - fromDate) / year;
  return result;
}
