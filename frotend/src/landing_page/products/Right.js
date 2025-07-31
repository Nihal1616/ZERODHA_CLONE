import React from "react";

function Right(){
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 p-5">
                    <h1 className="fs-2">Console</h1>
                    <p className="mt-3 fs-5 text-muted" style={{lineHeight:"1.8em"}}>The central dashboard for your Zerodha<br/> streaming market data, advanced charts,<br/> investments with in-depth reports and<br/> visualisations.</p>
                    <div className="mt-3">
                        <a href="" style={{textDecoration:"none"}}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                        

                    </div>
                </div>
                <div className="col-6 p-5">
                    <img src="media/kite.png"/>

                </div>
                
            </div>
        </div>
    )
}

export default Right;