import React, { useState, useEffect } from "react";
import { Route, Link, Redirect, useLocation } from "react-router-dom";
import CreateProducts from "../conponents/products/CreateProducts";
import EmployeeeConfirm from "../conponents/confirm/EmployeeConfirm";
import ListProducts from "../conponents/products/ListProducts";

function Admin({ match }) {
  const value = useLocation();
  console.log(value);
  const token = localStorage.getItem("token");
  if (token == null) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>This is Admin page</h1>
      <Link to="/adminLogout">Logout</Link>

      <Route
        exact
        path={`${match.url}/addProduct`}
        component={CreateProducts}
      />
      <Route
        exact
        path={`${match.url}/employeeConfirm`}
        component={EmployeeeConfirm}
      />

      <Route
        exact
        path={`${match.url}/listProducts`}
        component={ListProducts}
      />
    </div>
  );
}

export default Admin;
