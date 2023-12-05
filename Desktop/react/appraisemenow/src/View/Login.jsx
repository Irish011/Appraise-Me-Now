// Login.js

import React, {useState} from 'react';
// import { CgPassword } from 'react-icons/cg';
import '../Styles/style_login.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {

  const history=useNavigate();

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const handleLogin = async(e) => {
    e.preventDefault();

    try{
      await axios.post("http://localhost:3001/",{
        email, password
      })
      .then(res=>{
        if(res.data=="exist"){
          history("/dashboard",{state:{id:email}})
        }else if(res.data=="notexist"){
          alert("Incorrect password");
          console.log("No user");
        }
      })
      .catch(e=>{
        alert("Wrong details")
        console.log(e);
      })
    }catch(e){
      console.log(e);
    }
  };
  // render() {
    return (
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Login</h2>
          <form action="POST" method="POST">
            <div className="input-container">
              <input
                type="email"
                className="user"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                className="lock"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
            <input type="submit" name="Sign In" value="Sign In"  onClick={handleLogin} />
          </form>
        </div>
      </div>
    );
  };
// }

export default Login;
