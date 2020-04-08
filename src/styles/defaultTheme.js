// Utils
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


export const DEFAULT_THEME = {};

export const DEFAULT_OVERRIDES = {
};

const DEFAULT_PROPS = {
};

export default createMuiTheme({
  overrides: DEFAULT_OVERRIDES,
  props: DEFAULT_PROPS,
  ...DEFAULT_THEME,
});
