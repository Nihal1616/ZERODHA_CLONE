import React from "react";

function CreateTicket(){
    return(
        <div className="container">
            <div className="row mt-5 mb-5 p-5">
                <h1 className="  fs-2">
                To create a ticket, select a relevant topic
                </h1>

                <div className="col-4 p-5 mt-5">
                    <h4 className="fs-4">
                        <i class="fa-solid fa-circle-plus fs-5"></i> Account Opening
                    </h4>
                    <ul>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Resident individual</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Minor</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Non Resident Indian (NRI)</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Company, Partnership, HUF and LLP</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Glossary</a></li>
                    </ul>

                </div>

                <div className="col-4 p-5 mt-5">
                    <h4 className="fs-4">
                        <i class="fa-solid fa-circle-user fs-5"></i> Your Zerodha Acoount
                    </h4>
                    <ul>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Your Profile</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Account modification</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Nomination</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Transfer and conversion of securities</a></li>
                    </ul>

                </div>

                <div className="col-4 p-5 mt-5">
                    <h4 className="fs-4">
                        <i class="fa-solid fa-chart-column fs-5"></i> Kite
                    </h4>
                    <ul>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Your Profile</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Account modification</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Nomination</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Transfer and conversion of securities</a></li>
                    </ul>

                </div>


                <div className="col-4 p-5 mt-3">
                    <h4 className="fs-4">
                        <i class="fa-solid fa-indian-rupee-sign fs-5"></i> Funds
                    </h4>
                    <ul>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Add money</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Withdraw money</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Add bank accounts</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>eMandates</a></li>
                        
                    </ul>

                </div>

                <div className="col-4 p-5 mt-3">
                    <h4 className="fs-4">
                        <i class="fa-solid fa-compact-disc fs-5"></i> Console
                    </h4>
                    <ul>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Portfolio</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Corporate actions</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Funds statement</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Reports</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Profile</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Segments</a></li>
                        
                    </ul>

                </div>

                <div className="col-4 p-5 mt-3">
                    <h4 className="fs-4">
                        <i class="fa-solid fa-coins"></i> Coin
                    </h4>
                    <ul>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Mutual funds</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>National Pension Scheme (NPS)</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Features on Coin</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>Payments and Orders</a></li>
                        <li><a href="" style={{textDecoration:"none", lineHeight:"1.8em"}}>General</a></li>
                        
                    </ul>

                </div>
            </div>
      </div>
    )
}

export default CreateTicket;