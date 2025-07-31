import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar"

const Home=()=>{
    const username = localStorage.getItem("username");
    return(
        <>
            <TopBar/>
            <Dashboard/>
        </>
    )
}

export default Home;