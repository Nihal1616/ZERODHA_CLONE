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


  const OnSell = (orderId) => {
  const token = localStorage.getItem("token");

  axios
    .delete(`http://localhost:3002/userOrders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      // Remove the order from state without reloading
      setAllOrders((prev) => prev.filter((order) => order._id !== orderId));
    })
    .catch((err) => {
      console.error("Error deleting order:", err);
    });
  }

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

          {allOrders
            .filter((x) => x.qty != 0)
            .map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
                
                  <button
                    style={{
                      margin: "12px",
                      textAlign: "center",
                      borderColor: "red",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "12px",
                    }}
                    onClick={() => OnSell(order._id)}
                  >
                    Sell
                  </button>
                
              </tr>
            ))}
        </table>
      </div>
    </>
  );
};

export default Orders;
