import React from "react";
import { useDispatch } from "react-redux";
import { Hc } from "../store/slices/counter";

const Cb = () => {
  const ds = useDispatch();
  function hc() {
    ds(Hc());
  }
  return (
    <button
      onClick={hc}
      style={{
        backgroundColor: "black",
        color: "white",
        fontWeight: "Bold",
        padding: 10,
      }}
    >
      Increase Count
    </button>
  );
};

export default Cb;
