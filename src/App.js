import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeeConfirm from "./conponents/confirm/EmployeeConfirm";
import CreateProducts from "./conponents/products/CreateProducts";
import ListProducts from "./conponents/products/ListProducts";
import Login from "./conponents/Login";
import Logout from "./conponents/Logout";
import Admin from "./conponents/Admin";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/adminLogout" component={Logout} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
