
const sortAscend = (getValue) => (a, b) => {
  if (getValue(a) < getValue(b)) return -1;
  if (getValue(a) > getValue(b)) return 1;
  return 0;
};

const sortDescend = (getValue) => (a, b) => {
  if (getValue(a) < getValue(b)) return 1;
  if (getValue(a) > getValue(b)) return -1;
  return 0;
};

export const sortBy = (key, asc = true) => (array) => {
  const getValue = (object) => object[key];
  return [...array].sort(asc ? sortAscend(getValue) : sortDescend(getValue));
};
