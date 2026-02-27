import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { sc } from "../contents/Index";

const ProductDet = () => {
  const { id } = useParams();
  const { pd, spd, sld, ld, hac, ct } = useContext(sc);

  async function fd() {
    const api = await fetch(`https://dummyjson.com/products/${id}`);
    const rs = await api.json();
    if (rs) {
      spd(rs);
      sld(false);
    }
  }

  useEffect(() => {
    fd();
  }, [id]);
  console.log(pd);
  if (ld) {
    return <h1>Product details loading!!</h1>;
  }

  return (
    <div>
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid item*center grid-cols-5 gap-12 shadow-sm p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-lg relative">
              <img
                src={pd.thumbnail}
                alt={pd.title}
                className="rounded object-cover"
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {pd.image
                ? pd.images.map((im) => (
                    <div key={im} className="rounded-xl p-4 shadow-md">
                      <img
                        src={im}
                        alt="Product secondary image"
                        className="w-24 cursor-pointer"
                      ></img>
                    </div>
                  ))
                : []}
            </div>
          </div>
          <div className="lg: col-span-2">
            <h2 className="text-2xl font-extrabold text-[#333333]">
              {pd.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-xl font-bold">${pd.price}</p>
            </div>
            <div>
              <button
                disabled={
                  pd ? ct.findIndex((item) => item.id === pd.id) > -1 : false
                }
                onClick={() => hac(pd)}
                className="disabled: opacity-65 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDet;
