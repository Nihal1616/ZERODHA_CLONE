



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  {jwtDecode}  from "jwt-decode";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";


const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  // 
  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ prevent browser reload

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/login`,
        { ...inputValue },
        { withCredentials: true }
      );

      console.log("Login Response:", data);

      const { success, message, token } = data;

      if (success && token) {
        handleSuccess(message);
        localStorage.setItem("token", token);

        try {
          const decoded = jwtDecode(token);
          localStorage.setItem("username", decoded.username);
          localStorage.setItem("email", decoded.email);
          localStorage.setItem("userId", decoded.userId);
        } catch (err) {
          return handleError("Invalid token received");
        }

        setTimeout(() => {
          window.location.href = `${DASHBOARD_URL}?token=${encodeURIComponent(
            token
          )}`;
        }, 1000);
      } else {
        handleError(message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);

      // Show backend error if available
      if (error.response?.data?.message) {
        handleError(error.response.data.message);
      } else {
        handleError("Login failed. Please try again.");
      }
    }

    setInputValue({ email: "", password: "" });
  };


  return (
    <div className="form_container offset-4 mt-5 mb-5">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" >
          Submit
        </button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
