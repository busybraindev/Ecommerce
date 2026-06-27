import React, { Fragment, useContext } from "react";
import { sc } from "../contents/Index";

const CartType = ({ sp }) => {
  const { rv, hac } = useContext(sc);
  return (
    <Fragment>
      <div className="grid grid-cols-3 items-start gap-5 max-md:pl-2">
        <div className="col-span-2 flex items-start gap-4">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
            <img
              src={sp.thumbnail}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">{sp.title}</h3>
            <button
              onClick={() => rv(sp, true)}
              className="text-sm px-4 py-3 bg-black text-white font-extrabold"
            >
              REMOVE
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <h3 className="text-lg font-bold text-gray-900">
            ${sp.tp.toFixed(2)}
          </h3>
          <p className="mt-2 mb-3 font-bold text-[16px]">
            Quantity: {sp.quantity}
          </p>
          <div className="mt-3  ">
            <button
              onClick={() => rv(sp, false)}
              className=" disabled:opacity-65 border border-[#000] w-8  "
              disabled={sp.quantity === 1}
            >
              -
            </button>
            <button
              onClick={() => hac(sp)}
              className="border border-[#000]  w-8"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500" />
    </Fragment>
  );
};

export default CartType;
