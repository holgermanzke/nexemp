export function sumExperience() {
  let fromArray = ["01.01.2010", "01.01.2011", "01.01.2012"];
  fromArray.foreach(from => {
    from = Math.min(fromArray);
    from = from.replace(/\./g, "-");
    from = from.split("-");
  });
  {
    let from = Math.min(fromArray);
    from = from.replace(/\./g, "-");
    from = from.split("-");
  }

  let fromDate = `${from[2]}-${from[1]}-${from[0]}`;
  fromDate = new Date(fromDate);
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
