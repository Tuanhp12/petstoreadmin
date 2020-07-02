import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAccounts } from "../actions/accountActions";
function Login({ accountProps, getAccounts }) {
  useEffect(() => {
    getAccounts();
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [accountInfo, setAccount] = useState();
  const [value, setValue] = React.useState("");

  const getHistory = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    accountProps &&
      accountProps.map((account) => {
        if (username === account.username && password === account.password) {
          localStorage.setItem("token", "thisisauthendication");
          setValue(account.accountIdentifier);
          setAccount(account);
          setLoggedIn({
            loggedIn: true,
          });
        }
      });
  };

  let [text, setText] = useState('')

  if (loggedIn) {
    getHistory.push({
      pathname: "/admin",
      state: { getValue: value, passAccount: accountInfo },
    });
  } else{
    
  }
  return (
    <div className="container" id="loginForm">
      <div class="card card-body" style={{ width: "300px" }}>
        <h1>Đăng nhập</h1>
        {text}
        <form onSubmit={submitForm} className="was-validated">
          <div className="form-group">
            <label for="uname">Tài khoản:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Nhập tài khoản"
              name="uname"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="invalid-feedback">Chưa nhập thông tin.</div>
          </div>
          <div className="form-group">
            <label for="pwd">Mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Nhập mật khẩu"
              name="pswd"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="invalid-feedback">Chưa nhập thông tin.</div>
          </div>

          <button type="submit" className="btn btn-primary">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  accountProps: state.accountState.accounts,
});

export default connect(mapStateToProps, { getAccounts })(Login);
