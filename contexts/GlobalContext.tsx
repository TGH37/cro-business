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

  const companyName = "Convergence CRO"; 
  const fullNameOfLegalEntity = "Convergence CRO Ltd."; //TODO: Complete once confirmed
  const companyNumber = "0316155478"; //TODO: Complete once confirmed
  const emailAddress = "email@address.com"; //TODO: Complete once confirmed
  const hqAddress = "5 Pasture Crescent, Chapel Allerton, Leeds, West Yorkshire, LS7 4QS";
  const registeredAddress = "5 Pasture Crescent, Chapel Allerton, Leeds, West Yorkshire, LS7 4QS";
  const webAddress = "www.convergence-cro.com"; //TODO: Complete once confirmed
  const contactNumber = "+447712292714";

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