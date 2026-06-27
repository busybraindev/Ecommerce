import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDet from "./components/ProductDet";
import Cart from "./components/Cart";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/pl" element={<ProductList></ProductList>}></Route>
        <Route path="/pd/:id" element={<ProductDet></ProductDet>}></Route>
        <Route path="/ct" element={<Cart></Cart>}></Route>
        <Route
          path="*"
          element={<Navigate to="/pl" replace></Navigate>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
// import RegisterPage from "./pages/RegisterPage";
// import AuthPage from "./pages/Private";
// import Profile from "./pages/Profile";

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Login></Login>}></Route>
//         <Route path="/reg" element={<RegisterPage></RegisterPage>}></Route>
//         <Route
//           path="/pf"
//           element={
//             <AuthPage>
//               <Profile></Profile>
//             </AuthPage>
//           }
//         ></Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Cb from "./components/Cb";
// import Cv from "./components/Cv";
// import Add from "./blog/Add";
// import BL from "./blog/BL";
// import "./App.css";

// const App = () => {
//   return (
//     <div>
//       <h1>Blog List App</h1>
//       <Add></Add>
//       <BL></BL>
//       {/* <Cb></Cb>
//       // <Cv></Cv> */}
//     </div>
//   );
// };

// export default App;
