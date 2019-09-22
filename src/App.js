import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Companies from './components/Companies';
import TrackNew from './components/TrackNew';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from './AppContext';
import { BrowserRouter as Router, Route } from "react-router-dom";

const useStyles = makeStyles({
  main: {
    padding: '88px 24px 24px 264px'
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <AppContext.Provider value={{ drawerWidth: 240 }}>
      <Router>
        <div>
          <CssBaseline />
          <Header />
          <Menu />
          <main className={classes.main}>
            <Route path="/track-new" component={TrackNew} />
            <Route path="/" exact component={Companies} />
          </main>
        </div>
      </Router>
    </AppContext.Provider>
  )
}

export default App;
