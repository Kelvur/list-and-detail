export default theme => ({
  root: {
    border: '1px solid #CCCCCC',
    backgroundColor: theme.palette.background.default,
    borderRadius: '5px',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: 'auto',
    border: 0,
    margin: '6px',
    fontSize: '14px',
    backgroundColor: theme.palette.background.default,
    '&:focus': {
      border: 0,
      outline: 'none',
    },
  },
  divider: {
    border: `1px solid ${theme.palette.grey[300]}`,
    height: '40px',
    margin: '7px 0px',
  },
  button: {
    '&:hover': {
      backgroundColor: 'initial',
    },
  },
});
