import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3002/newOrder")
  //     .then((res) => {
        
  //           setAllOrders(res.data);
        
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching orders:", err);
  //     });
  // }, []);

    useEffect(() => {
    const token = localStorage.getItem("token"); // or sessionStorage
    axios
      .get("http://localhost:3002/userOrders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user orders:", err);
      });
  }, []);

  return (
    <>
      <h1>Orders</h1>

      <div className="order-table">
        <table>
            <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Mode</th>
            </tr>
          
          {allOrders.map((order, index) => (
            <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
                

            </tr>
            
              
          ))}
        </table>
      </div>
    </>
  );
};

export default Orders;
