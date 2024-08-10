import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import RootLayout from "./components/RootLayout";
import HtmlLesson from "./pages/Html/HtmlLesson";
import ReactRoot from "./pages/Reactjs/ReactRoot";
import GroupUser from "./pages/Reactjs/Props/GroupUser";
import FilterApp from "./pages/Reactjs/Filter/FilterApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: "true",
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // childrens
      {
        path: "html",
        element: <HtmlLesson />,
      },
      {
        path: "reactjs",
        element: <ReactRoot />,
        children: [
          {
            path: "myprops",
            element: <GroupUser />,
          },
          {
            path: "myfilter",
            element: <FilterApp />,
          },
        ],
      },

      // children for reactjs
    ],
  },
]);

const App = () => {
  return (
    <div className="w-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
