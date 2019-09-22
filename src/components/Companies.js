import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from './../AppContext';
import { API_URL, API_KEY } from './../constants';

const Companies = () => {
  const { tracked } = useContext(AppContext)
  const [data, setData] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const dataPromises = tracked.map(symbol => {
        const url = `${API_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
        return fetch(url).then((response) => ({ [symbol]: response }))
      })
      const data = await Promise.all(dataPromises)
      setData(data)
    }
    fetchData()
  }, [])
  return (
    <div>Companies</div>
  )
}

export default Companies;
