import React from "react";

function LeftImage(){
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 p-5">
                    <img src="media/kite.png"/>

                </div>
                <div className="col-6 p-5">
                    <h1 className="fs-2">Kite</h1>
                    <p className="mt-3 fs-5 text-muted" style={{lineHeight:"1.8em"}}>Our ultra-fast flagship trading platform with<br/> streaming market data, advanced charts,<br/> an elegant UI, and more. Enjoy the Kite<br/> experience seamlessly on your Android and iOS devices.</p>
                    <div className="mt-3">
                        <a href="" style={{textDecoration:"none"}}>try Demo<i class="fa-solid fa-arrow-right"></i></a>
                        <a href="" style={{marginLeft:"80px", textDecoration:"none"}}>learnMore<i class="fa-solid fa-arrow-right"></i></a>

                    </div>
                    <div className="mt-3 ">
                        <a href=""><img src="media/googlePlayBadge.svg"/></a>
                        <a href="" style={{marginLeft:"30px"}}><img src="media/appstoreBadge.svg"/></a>

                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
        
    )
}

export default LeftImage;