import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
