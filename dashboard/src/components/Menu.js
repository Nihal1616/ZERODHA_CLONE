import React, { useState } from "react";
import '../index.css'
import { jwtDecode } from "jwt-decode"; 


import { Link } from "react-router-dom";
import { useEffect } from "react";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdowmOpen, setIsProfileDropdowmOpen] = useState(false);
  const [username,setUsername]=useState("User");
  const tokenn = localStorage.getItem("token");
  // const username = localStorage.getItem("username");

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const tokenFromURL = params.get("token");
  let token = tokenFromURL;

  // if (tokenFromURL) {
  //   try {
  //     const decoded = jwtDecode(tokenFromURL);
  //     setUsername(decoded.username || "User");
  //   } catch (err) {
  //     console.error("Invalid token", err);
  //     setUsername("User"); // fallback
  //   }
  // } else {
  //   console.warn("No token provided in URL");
  //   setUsername("User"); // fallback
  // }
  if (tokenFromURL) {
    // Save it in localStorage
    localStorage.setItem("token", tokenFromURL);
  } else {
    // Try to get token from localStorage
    token = localStorage.getItem("token");
  }
  if (token) {
    try {
      const decoded = jwtDecode(token);
      setUsername(decoded.username || "User");
    } catch (err) {
      console.error("Invalid token", err);
      setUsername("User");
    }
  } else {
    console.warn("No token found");
    setUsername("User");
  }
}, []);


  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdowmOpen(!isProfileDropdowmOpen);
  };

  const handleLogout = () => {
  localStorage.removeItem("token");   // Remove JWT token
  localStorage.removeItem("username"); // optional if stored
  window.location.href = "https://zerodha-clone-pi-mauve.vercel.app/login";  //redirect to login page 
};

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
        
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu===0? activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu===1? activeMenuClass:menuClass}>Orders</p>
            </Link>
            
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu===2? activeMenuClass:menuClass}>Holdings</p>
            </Link>
            
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu===3? activeMenuClass:menuClass}>Positions</p>
            </Link>
            
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu===4? activeMenuClass:menuClass}>Funds</p>
            </Link>
            
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu===5? activeMenuClass:menuClass}>Apps</p>
            </Link>
            
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{username.slice(0,2).toUpperCase()}</div>
          <p className="username">{username}</p>
          
         

        </div>
        <div>
             { tokenn ?<><button className="logout" onClick={handleLogout}>Logout</button></>:(<></>)}

          </div>
      </div>
    </div>
  );
};

export default Menu;
