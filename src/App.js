import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from './AppContext';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <AppContext.Provider value={{ drawerWidth: 240 }}>
      <div className="root">
        <CssBaseline />
        <Header />
        <Menu />
      </div>
    </AppContext.Provider>
  )
}

export default App;
