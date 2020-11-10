import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage";

const hats = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={hats} />
    </Switch>
  );
}

export default App;
