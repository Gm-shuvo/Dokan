import React, { createContext, useContext } from "react";
import { AuthProvider } from "./auth/AuthProvider";
import { CommerceProvider } from "./api/CommerceProvider";

const CombineContext = createContext();

export const useCombineContext = () => {
  return useContext(CombineContext);
};

export const CombineProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CommerceProvider>
        
          {children}
       
      </CommerceProvider>
    </AuthProvider>
  );
};
