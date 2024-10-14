// import React from "react";
// import * as ReactDOM from "react-dom";
import Homepage from "../Components/Homepage/Homepage";
import Community from "../Components/Navbar/Community";
import Pathway from "../Components/Navbar/Pathway";
import Counselor from "../Components/Navbar/Counselor";
import Learning from "../Components/Navbar/Learning";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/pathway",
    element: <Pathway />,
  },
  {
    path: "/counselor",
    element: <Counselor />,
  },
  {
    path: "/learning",
    element: <Learning />,
  },
]);

export default router;
