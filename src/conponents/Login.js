import React, { useState, useEffect } from "react";
import { useHistory,Redirect } from "react-router-dom";
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
          localStorage.setItem("token", "thisisauthendication")
          setValue(account.accountIdentifier);
          setAccount(account);
          setLoggedIn({
            loggedIn: true,
          });
        }
      });
  };

  if (loggedIn) {
    getHistory.push({
      pathname: "/admin",
      state: { getValue: value, passAccount: accountInfo },
    });
  } else {
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  accountProps: state.accountState.accounts,
});

export default connect(mapStateToProps, { getAccounts })(Login);
