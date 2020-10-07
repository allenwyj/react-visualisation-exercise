import React, { createContext, useState, useEffect } from 'react';

import _ from 'lodash';

const cc = require('cryptocompare');
cc.setApiKey(
  '16767136e843919199fe8510781b0d0140cdbd53d2960742c811665107262c0d'
);

// fetching coin list from cryptocompare API
const fetchCoins = async () => {
  let coinList = (await cc.coinList()).Data;
  return coinList;
};

const MAX_FAVOURITES = 10;

export const AppContext = createContext({
  page: '',
  firstVisit: true,
  coinList: undefined,
  favourites: [],
  setCurrentPage: () => {},
  confirmFavourites: () => {},
  addCoin: () => {},
  removeCoin: () => {},
  isInFavourites: () => {}
});

export const AppProvider = ({ children }) => {
  const [page, setPage] = useState('settings');
  const [firstVisit, setFirstVisit] = useState(true);
  const [coinList, setCoinList] = useState(undefined);
  const [favourites, setFavourites] = useState(['BTC', 'ETH', 'XMR', 'DOGE']);

  const setCurrentPage = page => setPage(page);
  const confirmFavourites = () => {
    setFirstVisit(false);
    setPage('dashboard');

    // setting values to localStorage
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        favourites: favourites
      })
    );
  };

  const isInFavourites = key => _.includes(favourites, key);

  const addCoin = key => {
    let favouritesList = [...favourites];
    if (
      !favouritesList.includes(key) &&
      favouritesList.length < MAX_FAVOURITES
    ) {
      favouritesList.push(key);
      setFavourites(favouritesList);
    }
  };

  const removeCoin = key => {
    let favouritesList = [...favourites];
    setFavourites(_.pull(favouritesList, key));
  };

  // componentDidMount
  useEffect(() => {
    // checking whether localStorage has cryptoDash value or not
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    // No cache in the browser
    if (!cryptoDashData) {
      setPage('settings');
      setFirstVisit(true);

      // Not first-time visitor
    } else {
      setPage('dashboard');
      setFirstVisit(false);
      let { favourites } = cryptoDashData;
      setFavourites(favourites);
    }

    try {
      fetchCoins().then(coinList => {
        setCoinList(coinList);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        page,
        firstVisit,
        coinList,
        favourites,
        setCurrentPage,
        confirmFavourites,
        addCoin,
        removeCoin,
        isInFavourites
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
