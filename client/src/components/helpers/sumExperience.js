export function sumExperience() {
  const fromArray = ["01.01.2010", "01.01.2011", "01.01.2012"];
  const fromDateArray = fromArray.map(from => {
    // from = Math.min(fromArray);
    let normalizedForm = from.replace(/\./g, "-");
    normalizedForm = normalizedForm.split("-");
    normalizedForm = `${normalizedForm[2]}-${normalizedForm[1]}-${normalizedForm[0]}`;
    const fromDate = new Date(normalizedForm);
    return fromDate
  });
  console.log(fromDateArray)
  // {
  //   let from = Math.min(fromArray);
  //   from = from.replace(/\./g, "-");
  //   from = from.split("-");
  // }

  let due = "31.12.2013";
  due = due.replace(/\./g, "-");
  due = due.split("-");
  let dueDate = `${due[2]}-${due[1]}-${due[0]}`;
  dueDate = new Date(dueDate);
  const month = 1000 * 60 * 60 * 24 * 365;
  let exp = dueDate - fromDate;
  exp = exp / month;
  return exp;
}
