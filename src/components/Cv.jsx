import React from "react";
import { useSelector } from "react-redux";

const Cv = () => {
  const state = useSelector((state) => state.counter);
  const { cv } = state;
  return <p>Counter Value is {cv}</p>;
};

export default Cv;
