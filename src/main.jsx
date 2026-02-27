// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import Sp from "./contents/Index.jsx";

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Sp>
//       <App />
//     </Sp>
//   </BrowserRouter>
// );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import As from "./contents/Index.jsx";

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <As>
//       <App></App>
//     </As>
//   </BrowserRouter>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
