// import React from "react";

// function LoginIn() {
//   return (
//     <div className="container">
//       <div class="row mt-3">
//         <h3 class="col-6 offset-3 mt-3 mb-3">Login</h3>
//         <div class="col-6 offset-3">
//           <form
//             action="/login"
//             method="post"
//             class="needs-validation"
//             novalidate
//           >
//             <div class="mb-3">
//               <label for="username" class="form-label">
//                 Username
//               </label>
//               <input
//                 name="username"
//                 id="username"
//                 type="text"
//                 class="form-control"
//                 required
//               />
//             </div>

//             <div class="mb-3">
//               <label for="password" class="form-label">
//                 Password
//               </label>
//               <input
//                 name="password"
//                 id="password"
//                 type="password"
//                 class="form-control"
//                 required
//               />
//             </div>
//             <div className="text-center mb-5 mt-3">
//                 <button class="btn btn-success" style={{width:"30%"}}>Login</button>

//             </div>
            
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginIn;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-clone-dsd9.vercel.app/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message ,token } = data;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", token);
        const decoded = jwtDecode(token);
        localStorage.setItem("username", decoded.username);
        localStorage.setItem("email", decoded.email);
        localStorage.setItem("userId", decoded.userId);
        setTimeout(() => {
          // if (e.data.success) {
            // redirect to another frontend
            window.location.href = "http://localhost:3001/"; 
          // }
          // navigate("http://localhost:3001/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
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
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
