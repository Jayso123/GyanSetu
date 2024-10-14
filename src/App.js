// import logo from './logo.svg';
import React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
// import Navbar from "./Components/Navbar/Navbar";
import router from "./Routes/Route";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Homepage />
    </>
  );
}

export default App;
