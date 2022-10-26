const findNames = (searchTerms, rows) => {
  let names = searchTerms.split(" ");
  names = names.filter((name) => name !== "");

  const results = [];
  for (let row of rows) {
    const rowName = row.name.toLowerCase();
    for (let name of names)
      if (rowName.indexOf(name.toLowerCase()) !== -1) {
        results.push(row);
        break;
      }
  }

  return results;
};

export default findNames;
