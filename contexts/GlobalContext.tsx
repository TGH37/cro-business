import React, { createContext } from 'react';

interface globalOptions {
  companyName?: string
  fullNameOfLegalEntity?: string
  companyNumber?: string
  emailAddress?: string
  hqAddress?: string
  registeredAddress?: string
  webAddress?: string
  contactNumber?: string
};

export const GlobalContext = createContext<globalOptions>({});

export function GlobalProvider({ children }) {

  const companyName = "Sale-Verge"; //TODO: Complete once confirmed
  const fullNameOfLegalEntity = "Sales-Verge Optimisation Ltd."; //TODO: Complete once confirmed
  const companyNumber = "0316155478"; //TODO: Complete once confirmed
  const emailAddress = "email@address.com"; //TODO: Complete once confirmed
  const hqAddress = "5 Pasture Crescent, Chapel Allerton, Leeds, West Yorkshire, LS7 4QS";
  const registeredAddress = "5 Pasture Crescent, Chapel Allerton, Leeds, West Yorkshire, LS7 4QS";
  const webAddress = "www.sales-verge.com"; //TODO: Complete once confirmed
  const contactNumber = "+447123456789"; //TODO: Complete once confirmed

  return (
    <GlobalContext.Provider value={
      {
        companyName,
        fullNameOfLegalEntity,
        companyNumber,
        emailAddress,
        hqAddress,
        registeredAddress,
        webAddress,
        contactNumber,
      }
    }>
      { children }
    </GlobalContext.Provider>
  );
};