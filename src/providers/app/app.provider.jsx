import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext({
  page: '',
  firstVisit: true,
  setCurrentPage: () => {},
  confirmFavourites: () => {}
});

export const AppProvider = ({ children }) => {
  const [page, setPage] = useState('settings');
  const [firstVisit, setFirstVisit] = useState(true);

  const setCurrentPage = page => setPage(page);
  const confirmFavourites = () => {
    setFirstVisit(false);
    setPage('dashboard');
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        test: 'Hello'
      })
    );
  };

  useEffect(() => {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    // No cache in the browser
    if (!cryptoDashData) {
      setPage('settings');
      setFirstVisit(true);
    } else {
      setPage('dashboard');
      setFirstVisit(false);
    }
  }, []);

  console.log(page);
  console.log(firstVisit);

  return (
    <AppContext.Provider
      value={{ page, firstVisit, setCurrentPage, confirmFavourites }}
    >
      {children}
    </AppContext.Provider>
  );
};
