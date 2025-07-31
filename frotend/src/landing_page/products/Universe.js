import React from "react";
import { Link } from "react-router-dom";

function Universe(){
    return(
        <div className="container">
            <div className="row mt-5">
                <p className="fs-4 text-center mb-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
                <p className="fs-4 text-center mb-3">The Zerodha Universe</p>
                <p className="text-center">Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 mt-5 p-5 text-center">
                    <img src="media/zerodhaFundhouse.png" style={{width:"60%"}} className="mb-3" />
                    <p className="text-muted">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Our asset management venture<br/>
                        that is creating simple and transparent index<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-4 mt-5 p-5 text-center">
                    <img src="media/sensibullLogo.svg" style={{width:"60%"}} className="mb-3"/>
                    <p className="text-muted fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Options trading platform that lets you<br/>
                        create strategies, analyze positions, and examine<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;data points like open interest, FII/DII, and more.

                    </p>

                </div>
                <div className="col-4 mt-5 p-5 text-center">
                    <img src="media/streakLogo.png" style={{width:"60%"}} className="mb-3" />
                    <p className="text-muted">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Systematic trading platform<br/>
                        that allows you to create and backtest<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;strategies without coding.
                    </p>
                

                </div>
                <div className="col-4 mt-5 p-5 text-center">
                    <img src="media/goldenpiLogo.png" style={{width:"60%"}} className="mb-3"/>
                    <p className="text-muted fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Investment research platform<br/>
                        that offers detailed insights on stocks,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;sectors, supply chains, and more.

                    </p>

                </div>
                <div className="col-4 mt-5 p-5 text-center">
                    <img src="media/smallcase-logo.png" style={{width:"60%"}} className="mb-3"/>
                    <p className="text-muted fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Thematic investing platform<br/>
                        that helps you invest in diversified<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;baskets of stocks on ETFs.

                    </p>

                </div>
                <div className="col-4 mt-5 mb-3 p-5 text-center">
                    <img src="media/dittoLogo.png" style={{width:"60%"}} className="mb-3"/>
                    <p className="text-muted fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Personalized advice on life<br/>
                        and health insurance. No spam<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;and no mis-selling.

                    </p>

                </div>
                {/* <button className=" btn btn-primary fs-5 mb-5" style={{width:"25%",margin:"0 auto"}}>Sign up for free</button> */}
                <Link className="text-center" to="/signup"><button className=" btn btn-primary fs-5 mb-5 " style={{width:"25%",margin:"0 auto"}}>Sign up for free</button></Link>


            </div>

        </div>
    )
}

export default Universe;