import React, { useContext } from "react";
import { sc } from "../contents/Index";
import { useNavigate } from "react-router-dom";
import CartType from "./CartType";

const Cart = () => {
  const { ct } = useContext(sc);
  const nav = useNavigate();
  return (
    <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        My Cart page
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-2 space-y-4">
          {ct.length ? (
            ct.map((sp) => <CartType sp={sp}></CartType>)
          ) : (
            <h1>No cart Items</h1>
          )}
        </div>
        <div className="bg-gray-100 rounded-sm p-4 h-max">
          <h3 className="text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2">
            Order Summary
          </h3>
          <ul className="text-gray-700 mt-4 space-y-2">
            <p className="flex flex-wrap gap-4 text-sm font-bold">
              Total{" "}
              <span>
                ${ct.reduce((acc, curr) => acc + curr.tp, 0).toFixed(2)}
              </span>
            </p>
          </ul>
          <div className="mt-5 flex gap-2 ">
            <button
              disabled={ct.length === 0}
              className=" disabled:opacity-60 text-sm px-4 py-3 bg-black text-white font-extrabold"
            >
              Checkout
            </button>
            <button
              onClick={() => nav("/pl")}
              className="text-sm px-4 py-3 bg-black text-white font-extrabold"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
