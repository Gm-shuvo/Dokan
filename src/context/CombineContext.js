import React, { createContext, useContext } from "react";
import { AuthProvider } from "./auth/AuthProvider";
import { CommerceProvider } from "./api/CommerceProvider";
import { GlobalLoaderProvider, useGlobalLoader } from "./loader/GlobalLoader";

const CombineContext = createContext();

export const useCombineContext = () => {
  return useContext(CombineContext);
};

export const CombineProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CommerceProvider>
        <GlobalLoaderProvider>
          <CombineContext.Provider value={useGlobalLoader}>
            {children}
          </CombineContext.Provider>
        </GlobalLoaderProvider>
      </CommerceProvider>
    </AuthProvider>
  );
};
