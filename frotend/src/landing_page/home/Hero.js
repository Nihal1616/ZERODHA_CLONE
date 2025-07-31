import React from "react";
import { Link } from "react-router-dom";

function Hero(){
    return(
        <div className="container mb-5 p-5">
            <div className="row text-center">
                <img src="media/homeHero.png" alt="Hero Image" className="mb-5"/>
                <h1 className="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                {/* <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"25%",margin:"0 auto"}}>Sign up for free</button> */}
                <Link to="/signup"><button className=" btn btn-primary fs-5 mb-5" style={{width:"25%",margin:"0 auto"}}>Sign up for free</button></Link>
            </div>

        </div>
    );
}

export default Hero;