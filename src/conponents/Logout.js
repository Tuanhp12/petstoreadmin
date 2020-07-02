import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  localStorage.removeItem("token");
  return (
    <div className="container text-center">
      <br />
      <hr />
      <h1>Bạn đã đăng xuất</h1>
      <Link to="/">Đăng nhập lại</Link>
    </div>
  );
}

export default Logout;
