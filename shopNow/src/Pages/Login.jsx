 
import './css/login.css';
import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { AuthData } from "../Context/authContext";
import { useNavigate } from 'react-router-dom';

function Login() {
  const { userData, setToken } = useContext(AuthData);
  const [logData, setLogData] = useState({ name: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!logData.name || !logData.password) {
      alert("Please fill all fields");
      return;
    }

    const userExists = userData?.some(
      (user) => user.name === logData.name && user.password === logData.password
    );

    if (userExists) {
      localStorage.setItem("token", logData.name); // Consider more secure token handling
      setToken(logData.name);
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h2 className="login-title">Sign In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              value={logData.name}
              placeholder="Enter your username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={logData.password}
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e67e22"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {showPassword ? (
                    <>
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  ) : (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M14.06 14.06A10.07 10.07 0 0 1 12 4c-7 0-11 8-11 8a18.45 18.45 0 0 1 5.06 5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <path d="M1 1l22 22" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
        <p className="register-link">
          Don't have an account?{" "}
          <button onClick={() => navigate("/register")}>Register</button>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Login;