import React from "react";

import GlobalContextProvider from "./Store/GlobalContext";

import "./App.css";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">hello</div>
    </GlobalContextProvider>
  );
}

export default App;
