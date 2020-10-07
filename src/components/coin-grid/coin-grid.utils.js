export const getCoinsToDisplay = (coinList, topSection) => {
  return Object.keys(coinList).slice(0, topSection ? 10 : 100);
};
