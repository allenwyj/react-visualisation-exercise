import React, { createContext } from 'react';

import _ from 'lodash';
const cc = require('cryptocompare');

cc.setApiKey(
  '16767136e843919199fe8510781b0d0140cdbd53d2960742c811665107262c0d'
);

// The number allows users to save their favourite coins.
const MAX_FAVOURITES = 10;

export const AppContext = createContext({
  page: '',
  firstVisit: true,
  coinList: null,
  filteredCoinsList: null,
  favourites: [],
  prices: null,
  setCurrentPage: () => {},
  confirmFavourites: () => {},
  addCoin: () => {},
  removeCoin: () => {},
  isInFavourites: () => {},
  setFilteredCoins: () => {}
});

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'dashboard',
      favourites: ['BTC', 'ETH', 'XMR', 'DOGE'],
      // return: { page: 'settings', firstVisit: true } || { favourites }
      ...this.savedSettings(),
      coinList: null,
      prices: null,
      setCurrentPage: this.setCurrentPage,
      confirmFavourites: this.confirmFavourites,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavourites: this.isInFavourites,
      setFilteredCoins: this.setFilteredCoins
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
  };

  // fetching data from localStorage and return object
  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return { page: 'settings', firstVisit: true };
    }
    let { favourites } = cryptoDashData;
    return { favourites, firstVisit: false };
  }

  fetchCoins = async () => {
    try {
      console.log('Fetching Coins...');
      let coinList = (await cc.coinList()).Data;
      this.setState({ coinList });
    } catch (e) {
      console.warn(e);
    }
  };

  fetchPrices = async () => {
    if (this.state.firstVisit) return;
    console.log('Fetching prices...');
    let prices = await this.getPricesFromAPI();
    prices = prices.filter(price => Object.keys(price).length);
    this.setState({ prices });
  };

  getPricesFromAPI = async () => {
    let returnData = [];
    const { favourites } = this.state;

    for (let i = 0; i < favourites.length; i++) {
      try {
        let priceData = await cc.priceFull(favourites[i], 'USD');
        returnData.push(priceData);
      } catch (error) {
        console.warn('Fetch price error: ' + error);
      }
    }
    return returnData;
  };

  addCoin = key => {
    let favourites = [...this.state.favourites];
    if (!favourites.includes(key) && favourites.length < MAX_FAVOURITES) {
      favourites.push(key);
      this.setState({ favourites });
    }
  };

  removeCoin = key => {
    let favourites = [...this.state.favourites];
    this.setState({ favourites: _.pull(favourites, key) });
  };

  setFilteredCoins = filteredCoinsList => this.setState({ filteredCoinsList });

  setCurrentPage = page => this.setState({ page });

  confirmFavourites = () => {
    this.setState(
      {
        firstVisit: false,
        page: 'dashboard',
        prices: null
      },
      () => {
        this.fetchPrices();
      }
    );

    // saving favourites into the localStorage
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        favourites: this.state.favourites
      })
    );
  };

  isInFavourites = key => _.includes(this.state.favourites, key);

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
