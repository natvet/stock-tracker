import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from './../AppContext';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { API_URL, API_KEY } from './../constants';
import SingleCompany from './SingleCompany';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  paper: {
    padding: '24px'
  },
  title: {
    marginBottom: '12px'
  }
});

const Companies = () => {
  const { tracked, isLoading, setIsLoading } = useContext(AppContext)
  const [data, setData] = useState([])
  const classes = useStyles()
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const quotePromises = tracked.map(symbol => {
        const url = `${API_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
        return fetch(url)
        .then(response => response.json())
        .then(response => {
          const data = response['Global Quote']
          return {
            symbol: symbol,
            price: parseInt(data['05. price'], 10).toFixed(2),
            change: data['09. change'],
            changePercent: data['10. change percent'],
            closed: data['07. latest trading day']
          }
        })
        .catch((e) => console.error(e))
      })
      const searchPromises = tracked.map(symbol => {
        const url = `${API_URL}?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${API_KEY}`
        return fetch(url)
        .then(response => response.json())
        .then(response => {
          const data = response.bestMatches[0]
          return {
            name: data['2. name'],
            country: data['4. region'],
            open: data['5. marketOpen'],
            close: data['6. marketClose'],
            timezone: data['7. timezone'],
            currency: data['8. currency']
          }
        })
        .catch((e) => console.error(e))
      })
      const quoteData = await Promise.all(quotePromises)
      const searchData = await Promise.all(searchPromises)
      setIsLoading(false)
      const data = quoteData.map((item, i) => ({...item, ...searchData[i]}))
      setData(data)
    }
    fetchData()
  }, [])

  if (isLoading) return <Loader/>
  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" className={classes.title}>Companies</Typography>
      {data.length
        ? data.map(company => <SingleCompany key={company.symbol} company={company} />)
        : <Typography variant="body1">
            There are no companies yet. <Link to="/track-new">Track your first company.</Link>
          </Typography>
      }
    </Paper>
  )
}

export default Companies;
