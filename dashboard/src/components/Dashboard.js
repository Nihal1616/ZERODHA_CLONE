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
  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login"; // go back if unauthenticated
  }
}, []);

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



