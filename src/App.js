import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shoppage" component={ShopPage} />
    </Switch>
  );
}

export default App;
