import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const sc = createContext(null);
function Sp({ children }) {
  const [ld, sld] = useState(true);
  const [lp, slp] = useState([]);
  const [pd, spd] = useState({});
  const [ct, sct] = useState([]);
  const nav = useNavigate();
  async function fp() {
    try {
      sld(true);
      const api = await fetch("https://dummyjson.com/products");
      const rs = await api.json();
      // console.log(rs);

      if (rs && rs.products) {
        slp(rs.products);
        sld(false);
      }
    } catch (error) {
      slp(null);
      console.log(error);
      console.log("NO CONNECTION");
    }
  }
  function hac(gpd) {
    console.log(gpd);
    let copy = [...ct];
    const fIndex = copy.findIndex((mt) => mt.id === gpd.id);

    console.log(fIndex);
    if (fIndex === -1) {
      copy.push({
        ...gpd,
        quantity: 1,
        tp: gpd.price,
      });
    } else {
      copy[fIndex] = {
        ...copy[fIndex],
        quantity: copy[fIndex].quantity + 1,
        tp: (copy[fIndex].quantity + 1) * copy[fIndex].price,
      };
    }
    console.log(copy);
    sct(copy);
    localStorage.setItem("copy", JSON.stringify(copy));
    nav("/ct");
  }
  function rv(gpd, isrm) {
    let copy = [...ct];
    const fIndex = copy.findIndex((mt) => mt.id === gpd.id);
    if (isrm) {
      copy.splice(fIndex, 1);
    } else {
      copy[fIndex] = {
        ...copy[fIndex],
        quantity: copy[fIndex].quantity - 1,
        tp: (copy[fIndex].quantity - 1) * copy[fIndex].price,
      };
    }
    localStorage.setItem("copy", JSON.stringify(copy));
    sct(copy);
  }
  useEffect(() => {
    fp();
    sct(JSON.parse(localStorage.getItem("copy") || []));
  }, []);
  console.log(ct);
  return (
    <sc.Provider value={{ lp, ld, sld, pd, spd, hac, ct, rv }}>
      {children}
    </sc.Provider>
  );
}
export default Sp;

// firebase.console.com

// import { createContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import auth from "../firebaseconfig";
// import { useNavigate } from "react-router-dom";

// export const Ac = createContext(null);

// export default function As({ children }) {
//   const [fd, sfd] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [lgf, slgf] = useState({
//     email: "",
//     password: "",
//   });
//   const [us, sus] = useState(null);
//   const [ld, sld] = useState(true);
//   // const nav = useNavigate();
//   useEffect(() => {
//     const chkAuthState = onAuthStateChanged(auth, (cu) => {
//       sus(cu);
//       sld(false);
//     });
//     return () => {
//       chkAuthState();
//     };
//   }, [auth]);
//   // useEffect(() => {
//   //   if (us) nav("/pf");
//   // }, [us]);

//   console.log(us);

//   function RFire() {
//     sld(true);
//     const { email, password } = fd;
//     return createUserWithEmailAndPassword(auth, email, password);
//   }
//   function handleLogout() {
//     return signOut(auth);
//   }
//   function LFire() {
//     sld(true);
//     const { email, password } = lgf;
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   if (ld) {
//     return <h1>Loading!!</h1>;
//   }
//   return (
//     <Ac.Provider
//       value={{ fd, sfd, RFire, ld, us, lgf, slgf, LFire, handleLogout, sld }}
//     >
//       {children}
//     </Ac.Provider>
//   );
// }
