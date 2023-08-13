import React, { createContext, useContext, useState } from "react";

const GlobalLoaderContext = createContext();

export const useGlobalLoader = () => {
  return useContext(GlobalLoaderContext);
};

export const GlobalLoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  const value = {
    isLoading,
    showLoader,
    hideLoader,
  };

  return (
    <GlobalLoaderContext.Provider value={value}>
      {children}
    </GlobalLoaderContext.Provider>
  );
};
