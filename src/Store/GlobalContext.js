import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [globalContext, setGlobalContext] = useState({
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
    <GlobalContext.Provider
      value={{ globalContext, handleContextState, clearContext }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

GlobalContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

GlobalContextProvider.defaultProps = {
  children: {},
};
