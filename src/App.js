import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalContextProvider from "./Store/GlobalContext";

import Id from "./Components/ID";
import Validation from "./Components/Validation";
import Result from "./Components/Resultado";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <GlobalContextProvider>
            <Route path="/{peticion}" component={Id} />
            <Route path="/{peticion}/{dni}" component={Validacion} />
            <Route path="/{peticion}/{dni}/resultado" component={Result} />
          </GlobalContextProvider>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
