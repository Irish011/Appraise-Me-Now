// Login.js

import React from 'react';
import '../Styles/style_login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Login</h2>
          <form action="#" method="post">
            <div className="input-container">
              <input
                type="email"
                className="user"
                name="email"
                placeholder="Enter Your Email"
                required=""
              />
              <input
                type="password"
                name="password"
                className="lock"
                placeholder="Password"
                required=""
              />
            </div>
            <div className="forgot-grid">
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  defaultChecked={true}
                />
                <i></i>Remember me
              </label>
              <div className="forgot">
                <a href="#">Forgot Password?</a>
              </div>
              <div className="spacing-div"></div>
              <div className="clearfix"></div>
            </div>
            <input type="submit" name="Sign In" value="Sign In" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
