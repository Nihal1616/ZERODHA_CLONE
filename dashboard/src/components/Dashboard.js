import React from "react";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import ProtectedRoute from "./ProtectedRoute";


const Dashboard = () => {
  // const { username, email } = useParams();
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const token = localStorage.getItem("token");

  //     if (!token) {
  //       window.location.href = "http://localhost:3000/login";
  //       return;
  //     }

  //     try {
  //       const res = await axios.get("http://localhost:3002/getUser", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (
  //         res.data.user.username !== username ||
  //         res.data.user.email !== email
  //       ) {
  //         alert("Access denied.");
  //         window.location.href = "http://localhost:3000/login";
  //       } else {
  //         setUser(res.data.user);
  //       }
  //     } catch (err) {
  //       console.error("Error verifying user", err.message);
  //       window.location.href = "http://localhost:3000/login";
  //     }
  //   };

  //   fetchUser();
  // }, [username, email]);

  // if (!user) return <div>Loading...</div>;
  const username = localStorage.getItem("username");

  return (
    <ProtectedRoute>
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
