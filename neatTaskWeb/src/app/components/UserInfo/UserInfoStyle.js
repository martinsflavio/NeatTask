const styles = theme => ({
  section:{
    margin: `${theme.spacing.unit * 3}px`,
  },
  root: {
    border: '2px solid black',
    marginTop: `${theme.spacing.unit * 3}px`,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export default styles;
