import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import logoPlaceholder from './../assets/logo-placeholder.jpg';

const useStyles = makeStyles({
  logo: {
    height: '80px',
    marginRight: '12px'
  },
  singleCompany: {
    padding: '12px 0',
    display: 'flex'
  },
  price: {
    fontWeight: 500
  },
  change: {
    color: props => props.company.change > 0 ? 'green' : 'red'
  }
});

const SingleCompany = (props) => {
  const classes = useStyles(props)
  const {
    symbol,
    price,
    change,
    changePercent,
    closed,
    name, 
    country,
    open,
    close,
    timezone,
    currency
  } = props.company
  return (
    <div className={classes.singleCompany}>
      <img className={classes.logo} src={logoPlaceholder} />
      <div>
        <Typography variant="h6" component="span">{name}</Typography>
        <Typography variant="body1" component="span"> {symbol} </Typography>
        <Typography variant="body1" component="div">{country} {open}-{close} {timezone}</Typography>
        <Typography variant="body1" component="div">
            <span className={classes.price}>{price} </span>
            {currency}
            <span className={classes.change}> {change} ({changePercent}) {change > 0 && '↑'}{change < 0 && '↓'} </span>
            Closed: {closed}
        </Typography>
      </div>
     </div>
  )
}

export default SingleCompany;
