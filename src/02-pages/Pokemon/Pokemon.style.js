export default () => ({
  root: {
    paddingTop: '2.5rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '16rem',
  },
  descriptionContainer: {
    padding: '0 1.5rem',
  },
  name: {
    textTransform: 'capitalize',
    display: 'inline-block',
  },
  id: {
    display: 'inline-block',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  dataContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  footer: {
    display: 'inline-block',
    marginTop: '0.5rem',
    padding: '1rem 1.5rem',
    backgroundColor: 'rgba(63, 81, 181, 0.8)',
    color: 'white',
  },
  footerLink: {
    color: 'white',
    fontWeight: 600,
    textDecoration: 'none',
  },
});
