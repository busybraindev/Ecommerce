import React, { useContext } from "react";
import { Ac } from "../contents/Index";
import { Navigate } from "react-router-dom";

const AuthPage = ({ children }) => {
  const { us } = useContext(Ac);

  // if (ld) {
  //   return <h1>Please Wait!!</h1>;
  // }
  if (us) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default AuthPage;
