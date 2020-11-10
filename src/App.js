import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import Header from "./Components/Header";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/auth" component={AuthPage} />
      </Switch>
    </>
  );
}

export default App;
