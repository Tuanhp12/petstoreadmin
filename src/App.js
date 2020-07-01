import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeeConfirm from "./conponents/confirm/EmployeeConfirm";
import CreateProducts from "./conponents/products/CreateProducts";
import ListProducts from "./conponents/products/ListProducts";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route
            exact
            path="/admin/addProduct"
            render={(props) => <CreateProducts {...props} />}
          />
          <Route
            exact
            path="/admin/employeeConfirm"
            render={(props) => <EmployeeeConfirm {...props} />}
          />

          <Route
            exact
            path="/admin/listProduct"
            render={(props) => <ListProducts {...props} />}
          />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

// <Route
// exact
// path="/adminLogin"
// render={(props) => <LoginPage {...props} />}
// />
