import React, { useContext } from 'react';
import { AppContext } from '../../providers/app/app.provider';
import _ from 'lodash';
import fuzzy from 'fuzzy';

import { SearchContainer, SearchInputContainer } from './search.styles';

const Search = () => {
  const { coinList, setFilteredCoins } = useContext(AppContext);

  return (
    <SearchContainer>
      <h2>Search All Coins</h2>
      <SearchInputContainer
        onKeyUp={event => filterCoins(event, setFilteredCoins, coinList)}
      />
    </SearchContainer>
  );
};

const filterCoins = (e, setFilteredCoins, coinList) => {
  e.preventDefault();

  let inputValue = e.target.value.replace(/\s/g, '');

  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
};

const handleFilter = _.debounce((inputValue, coinList, setFilterCoins) => {
  // Get all the coin abbreviation
  let coinAbbreviations = Object.keys(coinList);
  // Get all the coin names, map coin abbreviation to name
  let coinNames = coinAbbreviations.map(abb => coinList[abb].CoinName);
  let allStringsToSearch = coinAbbreviations.concat(coinNames);
  // Fuzzy search inside allStringsToSearch, and put all strings into an array.
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);

  // _.pickBy is going to pick the properties from the source object and return a new object
  // based on a callback function which will be invoked with each property of the source object.
  // If the cb returns true, then add the property.
  let filteredCoins = _.pickBy(coinList, (value, key) => {
    let coinName = value.CoinName;
    return (
      // if the coin abbreviation is in the array
      _.includes(fuzzyResults, key) ||
      // if the coin name is in the array
      _.includes(fuzzyResults, coinName)
    );
  });

  setFilterCoins(filteredCoins);
}, 500);

export default Search;
