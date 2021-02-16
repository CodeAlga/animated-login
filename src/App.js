import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalContextProvider from "./Store/GlobalContext";

import Id from "./Components/Id";
import Validation from "./Components/Validation";
import Result from "./Components/Resultado";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="app">
          <GlobalContextProvider>
            <Route path="/{peticion}" component={Id} />
            <Route path="/{peticion}/{dni}" component={Validation} />
            <Route path="/{peticion}/{dni}/resultado" component={Result} />
          </GlobalContextProvider>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
