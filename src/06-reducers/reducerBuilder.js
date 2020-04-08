export const buildCases = (cases) => {
  cases.default = store => store;
  return cases;
};

export const switchCases = (state, action, cases) => {
  return (cases[action.type] || cases.default)(state, action.payload);
};
