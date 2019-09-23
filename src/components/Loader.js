import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    textAlign: 'center'
  }
});

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  )
}

export default Loader;
