const styles = theme => ({
  root: {
    marginTop: `${theme.spacing.unit * 3}px`,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  border: {
    border: '2px solid black',
  }
});

export default styles;
