import React, { useState, useEffect, useContext } from 'react';
import { Paper, MenuItem, Popper, TextField, Button, makeStyles } from '@material-ui/core';
import { API_URL, API_KEY } from './../constants';
import { AppContext } from './../AppContext';
import { withRouter } from "react-router-dom";
import Loader from './Loader';

const useStyles = makeStyles({
  button: {
    display: 'block',
    marginTop: '24px'
  }
});


const SearchField = ({ history }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [suggestions, setSuggestions] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [isValueSelected, setIsValueSelected] = useState(false)
  const { onTrackedUpdate, isLoading, setIsLoading } = useContext(AppContext)
  const handleInputChange = (e) => {
    if(isValueSelected) setIsValueSelected(false)
    setSearchValue(e.target.value)
  }
  const handleValueSelect = (value) => {
    setIsValueSelected(true)
    setSearchValue(value)
  }
  const handleTrackConfirm = () => {
    onTrackedUpdate(searchValue)
    history.push('/')
  }
  useEffect(() => {
    if(searchValue && !isValueSelected) {
      setIsLoading(true)
      fetch(`${API_URL}?function=SYMBOL_SEARCH&keywords=${searchValue}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        const suggestions = response.bestMatches && response.bestMatches.map(item => item['1. symbol'])
        setSuggestions(suggestions)
        setIsLoading(false)
      })
    }
  }, [searchValue])
  return (
    <React.Fragment>
      <TextField
        value={searchValue}
        onChange={handleInputChange}
        label="Company symbol"
        helperText="Provide the stock exchange symbol of a company you want to track"
        InputProps={{
          inputRef: node => {
            setAnchorEl(node);
          }
        }}
      />
      <Popper
        anchorEl={anchorEl}
        open={!!searchValue && !isValueSelected}
      >
        <Paper
          square
          style={{ width: anchorEl ? anchorEl.clientWidth : undefined }}
        >
          {isLoading && <Loader />}
          {!!suggestions.length &&  suggestions.map(suggestion => (
              <MenuItem
                component="div"
                onClick={() => handleValueSelect(suggestion)}
                key={suggestion}
              >
                {suggestion}
              </MenuItem>
            ))
          }
          {!isLoading && !suggestions.length && <MenuItem>No results</MenuItem>}
        </Paper>
      </Popper>
      <Button
        variant="contained"
        color="primary"
        disabled={!isValueSelected}
        className={classes.button}
        onClick={handleTrackConfirm}
      >
        Track
      </Button>
    </React.Fragment>
  )
}

export default withRouter(SearchField)
