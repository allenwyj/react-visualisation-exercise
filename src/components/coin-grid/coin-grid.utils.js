export const getCoinsToDisplay = (
  coinList,
  topSection,
  favourites,
  filteredCoins
) => {
  return topSection
    ? favourites
    : getLowerSectionCoins(coinList, filteredCoins);
};

const getLowerSectionCoins = (coinList, filteredCoins) => {
  return (
    // TODO: Think about the rest of list (> 100)
    (filteredCoins && Object.keys(filteredCoins).slice(0, 100)) ||
    Object.keys(coinList).slice(0, 100)
  );
};
