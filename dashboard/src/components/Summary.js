import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Summary = () => {
  const [Username,setUsername]=useState("User");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromURL = params.get("token");
    let token=tokenFromURL;
  
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
  return (
    <>
      <div className="username">
        <h6>Hi, {Username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;