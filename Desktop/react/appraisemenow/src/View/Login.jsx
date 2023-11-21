import React from 'react';

class YourReactComponent extends React.Component {
  render() {
    return (
        <div className="cbp-spmenu-push">
        <link href="Styles/style.css" rel='stylesheet' type='text/css' />
        <link href="Styles/bootstrap.css" rel='stylesheet' type='text/css' />
        <div className="main-content">
          <div id="page-wrapper">
            <div className="main-page login-page">
              <h2 className="title1">Login</h2>
              <div className="widget-shadow">
                <div className="login-body">
                  <form action="#" method="post">
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
                        <a href="#">forgot password?</a>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <input type="submit" name="Sign In" value="Sign In" />
                    <div className="registration">
                      Don't have an account ?{' '}
                      <a className="" href="signup.html">
                        Create an account
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YourReactComponent;
