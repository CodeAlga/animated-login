import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [globalContext, setGlobalContext] = usesSate({
    petition: "",
    id: "",
    authenticated: false,
    loading: false,
  });

  function handleContextState(data) {
    setGlobalContext(data);
  }

  function clearContext() {
    setGlobalContext({
      petition: "",
      id: "",
      authenticated: false,
      loading: false,
    });
  }

  return (
    <GlobalContext.Provider value={{ globalContext, handleContextState }}>
      {this.props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
