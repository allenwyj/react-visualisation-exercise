export const getCoinsToDisplay = (coinList, topSection, favourites) => {
  return topSection ? favourites : Object.keys(coinList).slice(0, 100);
};
