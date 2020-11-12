import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import Header from "./Components/Header";
import AuthPage from "./pages/AuthPage";

import { auth, createUserProfileDocument } from "./utils/firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unSubscriberFromAuth = null;

  componentDidMount() {
    this.unSubscriberFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscriberFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/auth" component={AuthPage} />
        </Switch>
      </>
    );
  }
}

export default App;
