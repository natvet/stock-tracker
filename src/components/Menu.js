import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { AppContext } from './../AppContext';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth => drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth => drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

export default function PermanentDrawerLeft() {
  const { drawerWidth } = useContext(AppContext)
  const classes = useStyles(drawerWidth)
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={Link} to='/track-new'>
          <ListItemText>Track new company</ListItemText>
        </ListItem>
        <ListItem button component={Link} to='/'>
          <ListItemText>Companies</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
}