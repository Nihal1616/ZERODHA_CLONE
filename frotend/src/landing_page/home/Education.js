import React from "react";

function Education(){
    return(
        
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-6">
                            <img src="media/education.svg" style={{width:"90%"}}/>

                        </div>
                        <div className="col-6">
                            <h1 className="fs-2">Free and open market education</h1>
                            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                            <a href="" style={{textDecoration:"none"}}>Varsity<i class="fa-solid fa-arrow-right mb-5"></i></a>
                            
                            
                            <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                            <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        
                    </div>
                        
                    
                        
                </div>
    );
}

export default Education;