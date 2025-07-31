// import React from "react";
// import { Link } from "react-router-dom";

// function SignUP() {
//   return (
//     <div className="container">
//       <div class="row mt-3 mb-5 ">
//         <h3 class="col-6 offset-3 mb-5 text-center mt-3 mb-3">Sign Up</h3>
//         <div class="col-6 offset-3">
//           <form
//             action="/signup"
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
//               <div class="valid-feedback">Looks good!</div>
//             </div>
//             <div class="mb-3">
//               <label for="email" class="form-label">
//                 Email
//               </label>
//               <input
//                 name="email"
//                 id="email"
//                 type="email"
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
//             <div className="text-center mt-5 mb-3">
//                 <button class="p-2 btn btn-success " style={{width:"30%"}}>SignUp</button>

//             </div>

//             <h5 className="fs-6 text-center">Already have an account?<Link to="/login"><a href="">Login In</a> </Link> </h5>
            
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUP;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './Style.css'

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
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
      username: "",
    });
  };

  return (
    <div className="form_container offset-4 mt-5 mb-5">
      <h2>Signup Account</h2>
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
          <label htmlFor="email">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
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
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
