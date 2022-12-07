import React from "react";
import { useState } from "react";
import UserBar from "../components/UserBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CartCard from "../components/CartCard";
import { quantity } from "../components/CartCard";

function UserCart() {
  // eslint-disable-next-line no-sparse-arrays
  const items = [
    {
      name: "iPhone 14",
      price: 80000,
      qty: 1,
    },
    {
      name: "Dell Inspiron 14",
      price: 70000,
      qty: 1,
    },
    ,
    {
      name: "Samsung Galaxy 10",
      price: 60000,
      qty: 1,
    },
  ];

  function CreateTable(props) {
    const [qty, setQty] = useState(props.qty);
    var totalAmount;
    const calcAmount = () => {
      sum = sum + props.price * quantity;
    };

    return (
      <>
        <tbody>
          <tr>
            <td
              style={{
                width: "150",
                padding: "5",
              }}
            >
              {props.itemName}
            </td>
            <td
              style={{
                width: "150",
                padding: "5",
              }}
            >
              ₹{props.price}
            </td>
            <td
              style={{
                width: "150",
                padding: "5",
              }}
            >
              <input
                type="number"
                defaultValue={qty}
                min="1"
                max={props.maxQty}
                id="x"
                onChange={(e) => {
                  setQty(parseInt(e.target.value));
                }}
              ></input>
            </td>
            <td>₹{qty * props.price}</td>
          </tr>
        </tbody>
      </>
    );
    var sum;
  }

  return (
    <>
      <UserBar />
      <section>
        <section className="h-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-75 py-0">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10">
                <div className="card rounded-3 mb-4">
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2 ">
                        <h5 className="mb-0">Product</h5>
                      </div>
                      <div className="col-md-2 col-lg-2 col-xl-2 ">
                        <h5 className="mb-0">Quantity</h5>
                      </div>
                      <div className="col-md-2 col-lg-2 col-xl-2 ">
                        <h5 className="mb-0">Price</h5>
                      </div>
                      <div className="col-md-2 col-lg-2 col-xl-2 ">
                        <h5 className="mb-0">Subtotal</h5>
                      </div>
                      <div className="col-md-2 col-lg-2 col-xl-2 ">
                        <h5 className="mb-0">Delete Item</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {items.map((item) => (
        // <CreateTable
        // qty={item.qty}
        // itemName={item.name}
        // price={item.price}
        // />
        <CartCard qty={item.qty} itemName={item.name} price={item.price} />
      ))}
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-2">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0">Total</h5>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0">$499.00</h5>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-warning btn-block btn-lg"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <table style={{ padding: "10%", width: "100%", margin: "2%" }}>
        <thead style={{ margin: "2%", padding: "2%" }}>
          <tr>
            <td></td>
            <td></td>
            <td>Item Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
          </tr>
        </thead>
        <tbody> */}

      {/* </tbody>
        </table>  */}
    </>
  );
}

export default UserCart;
