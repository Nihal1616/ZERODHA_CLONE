import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./components/Home";
import {BrowserRouter,Route,Routes} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>} />
      </Routes>
    
    </BrowserRouter> 
  </React.StrictMode>
);

