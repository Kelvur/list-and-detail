export default () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  inputContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& div': {
      margin: 10,
    },
  },
  rotate: {
    transform: 'rotateX(180deg)',
  },
});
