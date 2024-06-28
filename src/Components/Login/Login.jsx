import React from "react";
import axios from "axios";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/bloom-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = "https://bloom.realgrowsoft.com/auth/login";
    const loginData = {
      email,
      password,
    };

    try {
      const response = await axios.post(apiUrl, loginData);
      setMessage("Login successful");
      console.log("Response data:", response.data);
    } catch (error) {
      setMessage("Login failed");
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error during request setup:", error.message);
      }
    }
  };

  return (
    <div className="login-layer">
      <div className="login-wrapper">
        <div className="flex space-evenly">
          <img src={Logo} alt="Logo" className="login-logo" />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="flex align-center">
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </div>
        </form>
        <div className="register">
          <p>
            Don't have Account?{" "}
            <Link to="/" className="link-color">
              Sign Up
            </Link>
          </p>
        </div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
