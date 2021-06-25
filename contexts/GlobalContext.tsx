import React, { createContext } from 'react';

interface globalOptions {
  companyName?: string
}

export const GlobalContext = createContext<globalOptions>({})

export function GlobalProvider({ children }) {

  const companyName = "Salvergence";

  return (
    <GlobalContext.Provider value={
      {
        companyName
      }
    }>
      { children }
    </GlobalContext.Provider>
  );
};