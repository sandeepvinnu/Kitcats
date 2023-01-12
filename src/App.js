import { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        {/* <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" /> */}
      </Switch>
    );
  }
}

export default App;
