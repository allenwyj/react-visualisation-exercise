import React, { createContext, useState } from 'react';

export const AppContext = createContext({
  page: 'dashboard',
  setCurrentPage: () => {}
});

export const AppProvider = ({ children }) => {
  const [page, setPage] = useState('dashboard');
  const setCurrentPage = page => setPage(page);

  return (
    <AppContext.Provider value={{ page, setCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
};
