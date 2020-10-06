import React, { createContext, useState, useEffect } from 'react';

const cc = require('cryptocompare');

export const AppContext = createContext({
  page: '',
  firstVisit: true,
  setCurrentPage: () => {},
  confirmFavourites: () => {}
});

export const AppProvider = ({ children }) => {
  const [page, setPage] = useState('settings');
  const [firstVisit, setFirstVisit] = useState(true);
  const [coinList, setCoinList] = useState([]);

  const setCurrentPage = page => setPage(page);
  const confirmFavourites = () => {
    setFirstVisit(false);
    setPage('dashboard');

    // setting values to localStorage
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        test: 'Hello'
      })
    );
  };

  useEffect(() => {
    // checking whether localStorage has cryptoDash value or not
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    // No cache in the browser
    if (!cryptoDashData) {
      setPage('settings');
      setFirstVisit(true);
    } else {
      setPage('dashboard');
      setFirstVisit(false);
    }

    // fetching coin list from cryptocompare API
    const fetchCoins = async () => {
      let coinList = (await cc.coinList()).Data;
      setCoinList(coinList);
    };

    try {
      fetchCoins();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ page, firstVisit, setCurrentPage, confirmFavourites }}
    >
      {children}
    </AppContext.Provider>
  );
};
