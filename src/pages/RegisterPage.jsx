import React, { useContext } from "react";
import { Ac } from "../contents/Index";
import { Rf } from "../components/Forms";
import ComF from "../components/ComF";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebaseconfig";

const RegisterPage = () => {
  const { fd, sfd, RFire, sld } = useContext(Ac);
  const nav = useNavigate();
  console.log(fd);

  function hs(e) {
    e.preventDefault();
    RFire()
      .then((rs) => {
        if (rs.user) {
          updateProfile(rs.user, {
            displayName: fd.name,
          }).then(() => {
            if (auth.currentUser.displayName) {
              sld(false);
              nav("/pf");
            }
          });
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className=" px-6 py-5">
        <h3>Welcome Back</h3>
        <p>Register Page</p>
        {
          <ComF
            fc={Rf}
            fd={fd}
            sfd={sfd}
            onSubmit={hs}
            buttonText={"SAVE"}
          ></ComF>
        }
      </div>
    </div>
  );
};

export default RegisterPage;
