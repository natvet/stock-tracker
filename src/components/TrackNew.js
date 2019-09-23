import React from 'react';
import { Paper, Typography, makeStyles, Popper } from '@material-ui/core';
import SearchField from './SearchField';

const useStyles = makeStyles({
  paper: {
    padding: '24px'
  },
  title: {
    marginBottom: '12px'
  }
});

const TrackNew = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography
        variant="h6"
        className={classes.title}
      >
        Track new company
      </Typography>
      <SearchField />
    </Paper>
  )
}

export default TrackNew;
