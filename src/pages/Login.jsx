import React, { useContext, useEffect } from "react";
import ComF from "../components/ComF";
import { lg } from "../components/Forms";
import { Ac } from "../contents/Index";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { lgf, slgf, LFire, sld } = useContext(Ac);
  const nav = useNavigate();
  function hL(e) {
    e.preventDefault();
    LFire().then((rs) => {
      console.log(rs);
      if (rs) {
        sld(false);
        nav("/pf");
      }
    });
  }

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className=" px-6 py-5">
        <h1>Welcome Back!!!</h1>
        <p>Login Page</p>
        {
          <ComF
            fc={lg}
            fd={lgf}
            sfd={slgf}
            buttonText={"Login"}
            onSubmit={hL}
          ></ComF>
        }
      </div>
    </div>
  );
};

export default Login;
