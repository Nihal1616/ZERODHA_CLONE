import React from "react";
import { Link } from "react-router-dom";

function OpenAccount(){
    return(
        <div className="container mb-5 ">
            <div className="row text-center">
                <h1 className="mt-5 mb-4 fs-3">Open a Zerodha account</h1>
                <p className="mb-4 text-muted">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                {/* <button className=" btn btn-primary fs-5 mb-5" style={{width:"25%",margin:"0 auto"}}>Sign up for free</button> */}
                <Link to="/signup"><button className=" btn btn-primary fs-5 mb-5" style={{width:"25%",margin:"0 auto"}}>Sign up for free</button></Link>
            </div>

        </div>
    );
}

export default OpenAccount;