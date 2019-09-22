import React, { useContext } from 'react';
import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AppContext } from './../AppContext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appBar: {
    width: drawerWidth => `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth => drawerWidth,
  },
});

const Header = () => {
  const { drawerWidth } = useContext(AppContext)
  const classes = useStyles(drawerWidth)
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6">
          Stock Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
