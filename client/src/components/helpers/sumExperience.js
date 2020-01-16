export default function sumExperience(fromDates, dueDates) {
  function getMinFromDate() {
    const fromArray = fromDates;
    fromArray.map(from => {
      let normalizedFrom = from.replace(/\./g, "-");
      normalizedFrom = normalizedFrom.split("-");
      normalizedFrom = `${normalizedFrom[2]}-${normalizedFrom[1]}-${normalizedFrom[0]}`;
      const fromDate = new Date(normalizedFrom);
      return fromDate;
    });
  }
  function getMaxDueDate() {
    const dueArray = dueDates;
    dueArray.map(due => {
      let normalizedDue = due.replace(/\./g, "-");
      normalizedDue = normalizedDue.split("-");
      normalizedDue = `${normalizedDue[2]}-${normalizedDue[1]}-${normalizedDue[0]}`;
      const dueDate = new Date(normalizedDue);
      return dueDate;
    });
  }

  const minDueDate = Math.min.apply(null, getMinFromDate());
  const minFromDate = Math.min.apply(null, getMaxDueDate());
  const year = 1000 * 60 * 60 * 24 * 365;
  const experience = (minDueDate - minFromDate) / year;
  console.log(experience);
  return experience;
}
