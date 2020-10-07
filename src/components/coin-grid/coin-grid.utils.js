export const getCoinsToDisplay = coinList => {
  return Object.keys(coinList).slice(0, 100);
};
