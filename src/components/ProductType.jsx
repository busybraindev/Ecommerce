import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { sc } from "../contents/Index";

const ProductType = ({ sp }) => {
  const nav = useNavigate();
  const { hac, ct } = useContext(sc);
  console.log(ct);

  function hc(id) {
    console.log(id);
    nav(`/pd/${id}`);
  }
  return (
    <div className="relative group border border-cyan-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={sp.thumbnail}
          alt={sp.title}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
            {sp.title}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
            ${sp.price}
          </p>
        </div>
      </div>
      <button
        onClick={() => hc(sp.id)}
        className="px-5 mt-5 w-full py-2 rounded none bg-black text-white font-bold text-lg"
      >
        View Details
      </button>
      <button
        onClick={() => hac(sp)}
        disabled={ct.findIndex((item) => item.id === sp.id) > -1}
        className=" disabled:opacity-65 px-5 mt-5 w-full py-2 rounded none bg-black text-white font-bold text-lg"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductType;
