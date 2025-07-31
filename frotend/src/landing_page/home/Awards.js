import React from "react";

function Awards(){
    return(
        <div className="container mt-5">
            <div className="row ">
                <div className="col-6 p-5">
                    <img src="media/largestBroker.svg"/>

                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-3">1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <div className="row">
                        <div className="col-6 p-3 mb-3">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commedity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>

                        </div>
                        <div className="col-6 p-3">
                            <ul>
                                <li>Stacks & iPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt .Securities</li>
                            </ul>

                        </div>
                        <img src="media/pressLogos.png" style={{width:"80%"}}/>

                    </div>
                    
                    
                </div>
                

            </div>

        </div>
    );
}

export default Awards;