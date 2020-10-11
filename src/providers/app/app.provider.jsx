import React, { createContext } from 'react';
import moment from 'moment';

import _ from 'lodash';
const cc = require('cryptocompare');

cc.setApiKey(
  '16767136e843919199fe8510781b0d0140cdbd53d2960742c811665107262c0d'
);

// The number allows users to save their favourite coins.
const MAX_FAVOURITES = 10;
// The number limits the number of days will be displayed with its data.
const TIME_UNITS = 10;

export const AppContext = createContext({
  page: '',
  firstVisit: true,
  coinList: null,
  filteredCoinsList: null,
  favourites: [],
  currentFavourite: null,
  prices: null,
  historical: null,
  setCurrentPage: () => {},
  confirmFavourites: () => {},
  addCoin: () => {},
  removeCoin: () => {},
  isInFavourites: () => {},
  setFilteredCoins: () => {},
  setCurrentFavourite: () => {}
});

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'dashboard',
      favourites: ['BTC', 'ETH', 'XMR', 'DOGE'],
      // run and return: { page: 'settings', firstVisit: true } || { favourites, currentFavourite, firstVisit: false }
      ...this.savedSettings(),
      coinList: null,
      prices: null,
      historical: null,
      setCurrentPage: this.setCurrentPage,
      confirmFavourites: this.confirmFavourites,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavourites: this.isInFavourites,
      setFilteredCoins: this.setFilteredCoins,
      setCurrentFavourite: this.setCurrentFavourite
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistorical();
  };

  // fetching data from localStorage and return object
  savedSettings() {
    const cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return { page: 'settings', firstVisit: true };
    }
    const { favourites, currentFavourite } = cryptoDashData;
    return { favourites, currentFavourite, firstVisit: false };
  }

  fetchCoins = async () => {
    try {
      console.log('Fetching Coins...');
      const coinList = (await cc.coinList()).Data;
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

  fetchHistorical = async () => {
    if (this.state.firstVisit) return;
    const results = await this.getHistoricalFromAPI();
    const historical = [
      {
        name: this.state.currentFavourite,
        data: results.map((val, index) => [
          moment()
            .subtract({ months: TIME_UNITS - index })
            .valueOf(),
          val.USD
        ])
      }
    ];
    this.setState({ historical });
  };

  getHistoricalFromAPI = async () => {
    let returnData = [];
    const { currentFavourite } = this.state;

    // iterating and getting the past x period from now
    for (let units = TIME_UNITS; units > 0; units--) {
      returnData.push(
        cc.priceHistorical(
          currentFavourite,
          ['USD'],
          moment().subtract({ months: units }).toDate() // the current time and subtract 10 months from now (if units is 10)
        )
      );
    }

    // Return when all of these promises have results.
    return Promise.all(returnData);
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

  setCurrentFavourite = currentFavourite => {
    this.setState(
      {
        currentFavourite: currentFavourite,
        historical: null // clearing the old historical data
      },
      this.fetchHistorical //fetching new historical data after the new state updated
    );

    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        ...JSON.parse(localStorage.getItem('cryptoDash')),
        currentFavourite: currentFavourite
      })
    );
  };

  confirmFavourites = () => {
    const currentFavourite = this.state.favourites[0];

    this.setState(
      {
        firstVisit: false,
        page: 'dashboard',
        prices: null,
        currentFavourite,
        historical: null
      },
      () => {
        this.fetchPrices();
        this.fetchHistorical();
      }
    );

    // saving favourites into the localStorage
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        favourites: this.state.favourites,
        currentFavourite
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
