import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Keyframe from "./components/Keyframe.jsx";
import Simple from "./components/Simple.jsx";
import TextMotion from "./components/TextMotion.jsx";
import ButtonTap from "./components/ButtonTap.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      { path: "/simple", element: <Simple></Simple> },
      { path: "textMotion", element: <TextMotion></TextMotion> },
      { path: "keyframe", element: <Keyframe></Keyframe> },
      { path: "button", element: <ButtonTap></ButtonTap> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
