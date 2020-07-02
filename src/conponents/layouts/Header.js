import React, { useEffect, Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-primary"
          id="navbarSupportedContent"
        >
          <div className="container">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active nav-list">
                  <Link
                    className="nav-link"
                    to="/admin"
                    style={{ color: "white" }}
                  >
                    TRANG CHỦ
                  </Link>
                </li>

                <li className="nav-item nav-list">
                  <Link className="nav-link" to="/admin/employeeConfirm" style={{ color: "white" }}>
                    Quản lý đơn hàng
                  </Link>
                </li>
                <li className="nav-item nav-list">
                  <Link className="nav-link" to="/admin/addProduct" style={{ color: "white" }}>
                    Thêm mới sản phẩm
                  </Link>
                </li>
                <li className="nav-item nav-list">
                  <Link
                    className="nav-link"
                    to="/admin/listProducts"
                    style={{ color: "white" }}
                  >
                    Danh sách sản phẩm
                  </Link>
                </li>
                
              </ul>
              <Link to="/adminLogout" style={{ color: "white", float:'right'}}>Đăng xuất</Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
