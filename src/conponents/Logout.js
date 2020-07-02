import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  localStorage.removeItem("token")
  return (
    <div>
      <h1>You have been logout</h1>
      <Link to="/">Login Again</Link>
    </div>
  );
}

export default Logout;
